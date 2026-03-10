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

    // 4. Generation Simulation
    const generateBtn = document.getElementById('generateBtn');
    const outputArea = document.getElementById('outputArea');
    
    if (generateBtn) {
        generateBtn.addEventListener('click', () => {
            generateBtn.classList.add('loading');
            generateBtn.disabled = true;
            
            setTimeout(() => {
                generateBtn.classList.remove('loading');
                generateBtn.disabled = false;
                outputArea.classList.add('visible');
                outputArea.scrollIntoView({ behavior: 'smooth' });
            }, 2500);
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
