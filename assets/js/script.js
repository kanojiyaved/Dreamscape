document.addEventListener('DOMContentLoaded', () => {
    // 1. Stars Background
    const starsContainer = document.querySelector('.stars');
    const starCount = 150;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const style = {
            '--delay': `${Math.random() * 5}s`,
            '--d': `${2 + Math.random() * 3}s`,
            '--min-op': Math.random() * 0.2,
            '--max-op': 0.4 + Math.random() * 0.6,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
        };
        Object.keys(style).forEach(key => star.style.setProperty(key, style[key]));
        starsContainer.appendChild(star);
    }

    // 2. Custom Cursor
    const cursor = document.querySelector('.cursor');
    const ring = document.querySelector('.cursor-ring');
    window.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate3d(${e.clientX - 5}px, ${e.clientY - 5}px, 0)`;
        requestAnimationFrame(() => {
            ring.style.transform = `translate3d(${e.clientX - 18}px, ${e.clientY - 18}px, 0)`;
        });
    });

    // 3. DreamForm Mode Switching
    const modeBtns = document.querySelectorAll('.mode-btn');
    const modeInfos = document.querySelectorAll('.mode-info');
    
    modeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const mode = btn.dataset.mode;
            
            // Update buttons
            modeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update info
            modeInfos.forEach(info => {
                if (info.dataset.mode === mode) {
                    info.classList.add('show');
                } else {
                    info.classList.remove('show');
                }
            });
        });
    });

    // 4. API Integration & Generation
    let VEO_API_KEY = null;

    async function loadConfig() {
        try {
            const response = await fetch('.env');
            const text = await response.text();
            const lines = text.split('\n');
            for (const line of lines) {
                if (line.startsWith('VEO_API_KEY=')) {
                    VEO_API_KEY = line.split('=')[1].replace(/['"]/g, '').trim();
                    break;
                }
            }
            console.log('Project configuration initialized.');
        } catch (err) {
            console.error('Error loading .env:', err);
        }
    }

    loadConfig();

    const generateBtn = document.getElementById('generateBtn');
    const outputArea = document.getElementById('outputArea');
    const btnText = generateBtn ? generateBtn.querySelector('.btn-text') : null;
    
    if (generateBtn) {
        generateBtn.addEventListener('click', async () => {
            const dreamText = document.querySelector('.dream-textarea').value;
            const activeMode = document.querySelector('.mode-btn.active').dataset.mode;

            if (!dreamText.trim()) {
                alert('Please describe your dream first.');
                return;
            }

            if (!VEO_API_KEY) {
                alert('API Key not found. Please ensure VEO_API_KEY is set in your .env file.');
                return;
            }

            generateBtn.classList.add('loading');
            generateBtn.disabled = true;
            if (btnText) btnText.textContent = 'Initializing Neural Link...';
            
            try {
                // 1. Send initial request
                const baseUrl = 'https://generativelanguage.googleapis.com/v1beta';
                const modelId = 'veo-3.1-generate-preview'; // or veo-3.1-fast-generate-preview
                const response = await fetch(`${baseUrl}/models/${modelId}:predictLongRunning?key=${VEO_API_KEY}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        instances: [{ prompt: dreamText }],
                        parameters: {
                            aspectRatio: "16:9",
                            resolution: "1080p",
                            durationSeconds: "6",
                            enhancePrompt: true
                        }
                    })
                });

                const initialData = await response.json();
                
                if (initialData.error) {
                    throw new Error(initialData.error.message || 'API Error');
                }

                const operationName = initialData.name;
                console.log('Operation started:', operationName);
                if (btnText) btnText.textContent = 'Synthesizing Subconscious...';

                // 2. Polling Logic
                let isDone = false;
                let finalResponse = null;

                while (!isDone) {
                    await new Promise(resolve => setTimeout(resolve, 5000)); // Poll every 5s
                    
                    const pollRes = await fetch(`${baseUrl}/${operationName}?key=${VEO_API_KEY}`);
                    const pollData = await pollRes.json();
                    
                    if (pollData.error) {
                        throw new Error(pollData.error.message || 'Polling Error');
                    }

                    if (pollData.done) {
                        isDone = true;
                        finalResponse = pollData.response;
                    } else {
                        console.log('Rendering in progress...');
                    }
                }

                // 3. Render Result
                generateBtn.classList.remove('loading');
                generateBtn.disabled = false;
                if (btnText) btnText.textContent = 'Session Complete';
                
                outputArea.classList.add('visible');
                outputArea.scrollIntoView({ behavior: 'smooth' });

                const videoUri = finalResponse.generatedVideos?.[0]?.video?.uri;
                if (videoUri) {
                    const framesGrid = document.querySelector('.frames-grid');
                    if (framesGrid) {
                        framesGrid.innerHTML = `
                            <div class="video-container" style="grid-column: span 4; width: 100%; aspect-ratio: 16/9; background: #000; border: 1px solid var(--glow); overflow: hidden; position: relative;">
                                <video src="${videoUri}" controls autoplay loop style="width: 100%; height: 100%; object-fit: cover;"></video>
                                <div class="frame-label" style="position: absolute; bottom: 10px; right: 10px; z-index: 10;">VEO_RENDER_V3.1</div>
                            </div>
                        `;
                    }
                }

                console.log(`Successfully processed ${activeMode} request with Veo 3.1.`);

            } catch (error) {
                console.error('Generation failed:', error);
                generateBtn.classList.remove('loading');
                generateBtn.disabled = false;
                if (btnText) btnText.textContent = 'Initialization Failed';
                alert(`Neural rendering failed: ${error.message}`);
            }
        });
    }

    // 5. Smooth Scroll adjustments
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
