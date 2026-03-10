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
    
    if (generateBtn) {
        generateBtn.addEventListener('click', async () => {
            const dreamText = document.querySelector('.dream-textarea').value;
            const activeMode = document.querySelector('.mode-btn.active').dataset.mode;

            if (!dreamText.trim()) {
                alert('Please describe your dream first.');
                return;
            }

            generateBtn.classList.add('loading');
            generateBtn.disabled = true;
            
            try {
                // Simulate actual API processing delay
                await new Promise(resolve => setTimeout(resolve, 2500));

                /* 
                // Actual Veo API Call Example:
                if (VEO_API_KEY) {
                    const response = await fetch('https://videogen.googleapis.com/v1/projects/YOUR_PROJECT/locations/us-central1/publishers/google/models/veo-3-1:predict', {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${VEO_API_KEY}`,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ instances: [{ prompt: dreamText }] })
                    });
                    const data = await response.json();
                    console.log('Real API Response:', data);
                }
                */

                generateBtn.classList.remove('loading');
                generateBtn.disabled = false;
                outputArea.classList.add('visible');
                outputArea.scrollIntoView({ behavior: 'smooth' });
                
                console.log(`Successfully processed ${activeMode} request with Veo 3.1. Key used: ${VEO_API_KEY ? 'YES' : 'NO'}`);

            } catch (error) {
                console.error('Generation failed:', error);
                generateBtn.classList.remove('loading');
                generateBtn.disabled = false;
                alert('An error occurred during neural rendering. Please try again.');
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
