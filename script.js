document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const envelopeSection = document.getElementById('envelope-section');
    const letterSection = document.getElementById('letter-section');
    const yeySection = document.getElementById('yey-section');
    
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const heartsBg = document.getElementById('hearts-bg');
    const yeyTitle = document.querySelector('.yey-title');

    // 1. Envelope Opening Logic
    envelope.addEventListener('click', () => {
        const wrapper = envelope.querySelector('.envelope-wrapper-css');
        wrapper.classList.add('open');
        
        setTimeout(() => {
            envelope.style.transition = 'all 0.8s ease';
            envelope.style.transform = 'scale(0.8) translateY(-100px)';
            envelope.style.opacity = '0';
            
            setTimeout(() => {
                envelopeSection.classList.remove('show');
                letterSection.classList.add('show');
                createHeartShower();
            }, 600);
        }, 1200);
    });

    // 2. "No" Button Dodging Logic
    noBtn.addEventListener('mouseover', () => {
        // Switch to absolute positioning within the card on first hover
        if (noBtn.style.position !== 'absolute') {
            const rect = noBtn.getBoundingClientRect();
            const parentRect = noBtn.parentElement.parentElement.getBoundingClientRect(); // .letter-card
            
            // Set initial absolute position to match current flex position
            noBtn.style.left = `${rect.left - parentRect.left}px`;
            noBtn.style.top = `${rect.top - parentRect.top}px`;
            noBtn.style.position = 'absolute';
            noBtn.style.margin = '0';
            noBtn.style.zIndex = '1000';
        }

        // Calculate a new position nearby (closer range)
        const parent = noBtn.parentElement.parentElement; // .letter-card
        const minDistance = 40;
        const maxDistance = 100;
        
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * (maxDistance - minDistance) + minDistance;
        
        // Use current styles for relative movement
        let currentLeft = parseFloat(noBtn.style.left);
        let currentTop = parseFloat(noBtn.style.top);
        
        let newX = currentLeft + Math.cos(angle) * dist;
        let newY = currentTop + Math.sin(angle) * dist;
        
        // Clamp to card boundaries
        const padding = 20;
        newX = Math.min(Math.max(padding, newX), parent.offsetWidth - noBtn.offsetWidth - padding);
        newY = Math.min(Math.max(padding, newY), parent.offsetHeight - noBtn.offsetHeight - padding);
        
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
        noBtn.style.transition = 'all 0.2s ease-out';
    });

    // 3. "Yes" Button Logic
    yesBtn.addEventListener('click', () => {
        letterSection.classList.remove('show');
        yeySection.classList.add('show');
        
        prepareYeyTitle();
        createConfettiBurst();
        startContinuousHearts();
    });

    // 4. Decorations
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '💖';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        heartsBg.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }

    function createHeartShower() {
        for (let i = 0; i < 20; i++) {
            setTimeout(createHeart, i * 100);
        }
    }

    function createConfettiBurst() {
        const colors = ['#ff4081', '#7e57c2', '#ffeb3b', '#4caf50', '#2196f3'];
        const shapes = ['❤️', '✨', '🌸', '⭐', '🎈'];
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];
            confetti.style.left = '50%';
            confetti.style.top = '50%';
            
            const dx = (Math.random() - 0.5) * 600 + 'px';
            const dy = (Math.random() - 0.5) * 600 + 'px';
            const dr = (Math.random() * 720) + 'deg';
            
            confetti.style.setProperty('--dx', dx);
            confetti.style.setProperty('--dy', dy);
            confetti.style.setProperty('--dr', dr);
            confetti.style.fontSize = (Math.random() * 20 + 10) + 'px';
            confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
            
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 1000);
        }
    }

    function prepareYeyTitle() {
        const text = yeyTitle.textContent;
        yeyTitle.textContent = '';
        text.split(' ').forEach((word, i) => {
            const span = document.createElement('span');
            span.textContent = word + ' ';
            span.style.animationDelay = (i * 0.2) + 's';
            yeyTitle.appendChild(span);
        });
    }

    function startContinuousHearts() {
        setInterval(createHeart, 250);
    }

    setInterval(createHeart, 1000);
});
