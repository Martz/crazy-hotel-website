// 🔥🔥🔥 ABSOLUTE MADNESS JAVASCRIPT 🔥🔥🔥

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Matrix Effect
    initMatrix();
    
    // Initialize Particles
    initParticles();
    
    // Set up cursor trail
    initCursorTrail();
    
    // Mobile navigation toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Toggle Maximum Chaos Mode
    const chaosButton = document.getElementById('toggleChaos');
    if (chaosButton) {
        chaosButton.addEventListener('click', function() {
            document.body.classList.toggle('extreme-chaos');
            
            if (document.body.classList.contains('extreme-chaos')) {
                this.innerHTML = '<i class="fas fa-radiation"></i> NORMALIZE (BORING)';
                
                // Add extreme chaos effects
                const allElements = document.querySelectorAll('*');
                allElements.forEach(el => {
                    // Random rotation for elements
                    if (Math.random() > 0.7 && el.tagName !== 'BODY' && el.tagName !== 'HTML') {
                        el.style.transform = `rotate(${(Math.random() * 10) - 5}deg)`;
                    }
                });
                
                // Intensify animations
                document.documentElement.style.setProperty('--animation-speed-multiplier', '2');
                
                // Create more floating objects
                createMoreFloatingObjects();
                
                // Create random screen distortions
                createScreenDistortions();
                
                // Play chaotic audio
                playChaoticAudio();
            } else {
                this.innerHTML = '<i class="fas fa-radiation"></i> MAXIMUM CHAOS';
                
                // Remove extreme chaos effects
                const allElements = document.querySelectorAll('*');
                allElements.forEach(el => {
                    if (el.style.transform.includes('rotate')) {
                        el.style.transform = '';
                    }
                });
                
                // Reset animation speed
                document.documentElement.style.setProperty('--animation-speed-multiplier', '1');
                
                // Remove extra floating objects
                const extraFloatingItems = document.querySelectorAll('.extra-float-item');
                extraFloatingItems.forEach(item => item.remove());
                
                // Remove screen distortions
                const distortions = document.querySelector('.screen-distortions');
                if (distortions) distortions.remove();
                
                // Stop chaotic audio
                stopChaoticAudio();
            }
        });
    }
    
    // Audio control
    const audioButton = document.getElementById('toggleAudio');
    const audioElement = document.getElementById('partyAudio');
    
    if (audioButton && audioElement) {
        audioButton.addEventListener('click', function() {
            if (audioElement.paused) {
                audioElement.volume = 0.3;
                audioElement.play();
                this.innerHTML = '<i class="fas fa-volume-up"></i>';
            } else {
                audioElement.pause();
                this.innerHTML = '<i class="fas fa-volume-mute"></i>';
            }
        });
    }
    
    // Date restrictions for booking form
    const today = new Date();
    const checkinInput = document.getElementById('checkin');
    const checkoutInput = document.getElementById('checkout');
    
    if (checkinInput && checkoutInput) {
        // Format today's date as YYYY-MM-DD for the input min attribute
        const formatDate = (date) => {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        };
        
        // Set minimum checkin date to today
        checkinInput.min = formatDate(today);
        
        // Update minimum checkout date when checkin date changes
        checkinInput.addEventListener('change', function() {
            if (this.value) {
                const checkinDate = new Date(this.value);
                // Set minimum checkout date to the day after checkin
                checkinDate.setDate(checkinDate.getDate() + 1);
                checkoutInput.min = formatDate(checkinDate);
                
                // If current checkout date is before the new minimum, reset it
                if (checkoutInput.value && new Date(checkoutInput.value) < checkinDate) {
                    checkoutInput.value = formatDate(checkinDate);
                }
            }
        });
        
        // Add glitch effect to date inputs
        const glitchInputs = document.querySelectorAll('.glitch-input, .glitch-select');
        glitchInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.classList.add('active-glitch');
                
                // Occasionally scramble the input value when focused
                if (Math.random() > 0.7 && this.value) {
                    const originalValue = this.value;
                    this.value = scrambleText(originalValue);
                    
                    setTimeout(() => {
                        this.value = originalValue;
                    }, 500);
                }
            });
            
            input.addEventListener('blur', function() {
                this.classList.remove('active-glitch');
            });
        });
    }
    
    // Scramble text helper function
    function scrambleText(text) {
        const chars = '!@#$%^&*()_+-=[]{}|;:,./<>?`~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let scrambled = '';
        
        for (let i = 0; i < text.length; i++) {
            if (Math.random() > 0.7) {
                scrambled += text[i];
            } else {
                scrambled += chars[Math.floor(Math.random() * chars.length)];
            }
        }
        
        return scrambled;
    }
    
    // Package selection updates form
    const packageSelect = document.getElementById('package');
    const adultsSelect = document.getElementById('adults');
    const roomsSelect = document.getElementById('rooms');
    
    if (packageSelect && adultsSelect && roomsSelect) {
        packageSelect.addEventListener('change', function() {
            if (this.value === 'blackout') {
                adultsSelect.value = '6';
                roomsSelect.value = '3';
            } else if (this.value === 'brain') {
                adultsSelect.value = '3';
                roomsSelect.value = '2';
            } else if (this.value === 'roulette') {
                // Random values for the roulette package
                adultsSelect.value = Math.floor(Math.random() * 6) + 1;
                roomsSelect.value = Math.floor(Math.random() * 4) + 1;
                
                // Randomly change the package name text
                this.options[this.selectedIndex].text = "T̷͈̐̽̈́H̵͚̆̚E̶̡̧͙̻̋ ̶̞̝͊̎̿B̶̘̱́̆̕͝L̶̞̙͓̄̂̊A̸̝̩̋̂͠C̸̨̛͗̅̋ͅK̸̨͛̽P̸̢̬̈́͗̈́O̶̹̊Ò̴̧̝̇͛L̵̤̯̗̾ ̵̰̾̓R̷̟͍̫̀̀Ỏ̷̻͓͕̐͝U̴̪̻̗͉̍͋̋̏L̸̯̟̖̖̽̿̈E̶̻̩̭̍̔̚͝T̷̩͙̹͒͐T̵͎͋͋̿̅E̷̻̾͛͌";
            }
        });
    }
    
    // Add 3D tilt effect to cards
    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xRotation = ((y - rect.height / 2) / rect.height) * 20;
            const yRotation = ((x - rect.width / 2) / rect.width) * -20;
            
            this.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.05)`;
            
            // Add glowing highlight
            const highlight = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 60%)`;
            this.style.backgroundImage = highlight;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            this.style.backgroundImage = 'none';
        });
    });
    
    // Handle booking form submission with party animation
    const bookingForm = document.getElementById('booking');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Extra chaotic form validation
            const nameInput = document.getElementById('name');
            if (nameInput && nameInput.value) {
                // 50% chance to change the user's name
                if (Math.random() > 0.5) {
                    const crazyNames = [
                        'MOONCHILD', 'VOID WALKER', 'ASTRAL DRIFTER', 
                        'NEON GHOST', 'PHANTOM X', 'MINDWRECKER', 
                        'DREAM EATER', 'DISCO DEMON', 'REALITY BENDER'
                    ];
                    nameInput.value = crazyNames[Math.floor(Math.random() * crazyNames.length)];
                }
            }
            
            // Collect form data
            const formData = new FormData(this);
            const bookingData = {};
            for (let [key, value] of formData.entries()) {
                bookingData[key] = value;
            }
            
            console.log('Booking request:', bookingData);
            
            // FULL CHAOS PARTY ANIMATION
            // 1. Create confetti explosion
            createConfettiExplosion();
            
            // 2. Create screen shake
            createScreenShake();
            
            // 3. Flash the screen with colors
            flashScreen();
            
            // 4. Random sound effects
            playRandomSoundEffect();
            
            // Replace form with success message after all the chaos
            setTimeout(() => {
                const successMessage = document.createElement('div');
                successMessage.className = 'booking-success';
                successMessage.innerHTML = `
                    <i class="fas fa-skull-crossbones"></i>
                    <h3 class="glitch-text" data-text="THERE'S NO GOING BACK NOW">THERE'S NO GOING BACK NOW</h3>
                    <p>Your soul has been processed. Prepare for complete sensory obliteration.</p>
                    <div class="countdown">Preparing your psychedelic doom in <span id="countdown">666</span> seconds</div>
                `;
                
                this.style.opacity = '0';
                setTimeout(() => {
                    this.parentNode.replaceChild(successMessage, this);
                    successMessage.style.opacity = '0';
                    setTimeout(() => {
                        successMessage.style.opacity = '1';
                        
                        // Start a fake countdown
                        let count = 666;
                        const countdownElement = document.getElementById('countdown');
                        const interval = setInterval(() => {
                            // Randomly decide whether to count up or down
                            if (Math.random() > 0.8) {
                                count += Math.floor(Math.random() * 10);
                            } else {
                                count -= Math.floor(Math.random() * 10);
                            }
                            
                            // Ensure count stays "evil"
                            if (count < 100) count = 666;
                            
                            countdownElement.textContent = count;
                            
                            // Randomly glitch the countdown
                            if (Math.random() > 0.9) {
                                countdownElement.style.transform = 'skew(20deg, 10deg)';
                                setTimeout(() => {
                                    countdownElement.style.transform = 'skew(0deg, 0deg)';
                                }, 100);
                            }
                        }, 1000);
                    }, 10);
                }, 500);
            }, 3000);
        });
    }
    
    // Matrix effect
    function initMatrix() {
        const canvas = document.getElementById('matrix-canvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Characters to display
        const characters = '01BLACKPOOL👁️👽💊🔥MADHOUSE🦄RAVE💀';
        const columns = canvas.width / 20;
        const drops = [];
        
        // Initialize drops
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }
        
        // Drawing the characters
        function draw() {
            // Black background with opacity for trailing effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Green text
            ctx.fillStyle = '#00ff77';
            ctx.font = '20px monospace';
            
            // Loop over drops
            for (let i = 0; i < drops.length; i++) {
                // Get random character
                const text = characters.charAt(Math.floor(Math.random() * characters.length));
                
                // Random color
                const colors = ['#ff00aa', '#00ff77', '#ff3300', '#0099ff', '#cc00ff', '#ffcc00'];
                ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
                
                // Draw the character
                ctx.fillText(text, i * 20, drops[i] * 20);
                
                // Reset drop position when it reaches bottom or randomly
                if (drops[i] * 20 > canvas.height || Math.random() > 0.975) {
                    drops[i] = 0;
                }
                
                // Move the drop down
                drops[i]++;
            }
        }
        
        // Set interval to draw
        setInterval(draw, 50);
    }
    
    // Particles effect
    function initParticles() {
        const particlesElement = document.getElementById('particles-js');
        if (!particlesElement) return;
        
        // Check if particles.js is loaded
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": ["#ff00aa", "#00ff77", "#ff3300", "#0099ff", "#cc00ff", "#ffcc00"]
                    },
                    "shape": {
                        "type": ["circle", "triangle", "star", "polygon"],
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 5,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 4,
                            "size_min": 0.3,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.2,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "none",
                        "random": true,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });
        }
    }
    
    // Cursor trail
    function initCursorTrail() {
        const canvas = document.getElementById('cursorCanvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        
        // Set canvas dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Trail points array
        const trailPoints = [];
        const maxTrailLength = 20;
        
        // Mouse position
        let mouseX = 0;
        let mouseY = 0;
        
        // Update mouse position
        window.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Add new point to trail
            trailPoints.push({ x: mouseX, y: mouseY });
            
            // Limit trail length
            if (trailPoints.length > maxTrailLength) {
                trailPoints.shift();
            }
        });
        
        // Animation function
        function animateCursorTrail() {
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw trail
            for (let i = 0; i < trailPoints.length; i++) {
                const point = trailPoints[i];
                
                // Calculate size and opacity based on position in trail
                const size = 20 * (i / trailPoints.length);
                const opacity = 0.7 * (i / trailPoints.length);
                
                // Get random neon color
                const colors = ['#ff00aa', '#00ff77', '#ff3300', '#0099ff', '#cc00ff', '#ffcc00'];
                const color = colors[i % colors.length];
                
                // Draw circle
                ctx.beginPath();
                ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.globalAlpha = opacity;
                ctx.fill();
                
                // Draw glow effect
                ctx.beginPath();
                ctx.arc(point.x, point.y, size * 1.5, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.globalAlpha = opacity * 0.3;
                ctx.fill();
            }
            
            // Request next frame
            requestAnimationFrame(animateCursorTrail);
        }
        
        // Start animation
        animateCursorTrail();
        
        // Update canvas dimensions on window resize
        window.addEventListener('resize', function() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }
    
    // Chaos mode functions
    function createMoreFloatingObjects() {
        const container = document.querySelector('.floating-objects');
        if (!container) return;
        
        const emojis = ['🧠', '👁️', '💣', '🔮', '💀', '🦄', '👽', '💊', '🍹', '🔥', '⚡️', '🌈'];
        
        for (let i = 0; i < 20; i++) {
            const floatItem = document.createElement('div');
            floatItem.className = 'float-item extra-float-item';
            floatItem.style.top = `${Math.random() * 100}%`;
            floatItem.style.left = `${Math.random() * 100}%`;
            floatItem.style.animationDelay = `${Math.random() * 5}s`;
            
            const emoji = document.createElement('span');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.fontSize = `${Math.random() * 40 + 20}px`;
            
            floatItem.appendChild(emoji);
            container.appendChild(floatItem);
        }
    }
    
    function createScreenDistortions() {
        const distortionsContainer = document.createElement('div');
        distortionsContainer.className = 'screen-distortions';
        document.body.appendChild(distortionsContainer);
        
        // Add CSS for distortions
        const style = document.createElement('style');
        style.textContent = `
            .screen-distortions {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 9997;
            }
            
            .glitch-line {
                position: absolute;
                width: 100%;
                height: 5px;
                background-color: rgba(255, 0, 170, 0.5);
                box-shadow: 0 0 10px rgba(255, 0, 170, 0.7);
                animation: glitch-line-anim 2s infinite;
            }
            
            @keyframes glitch-line-anim {
                0% {
                    transform: translateY(-100vh);
                }
                100% {
                    transform: translateY(100vh);
                }
            }
        `;
        document.head.appendChild(style);
        
        // Create glitch lines
        for (let i = 0; i < 5; i++) {
            const glitchLine = document.createElement('div');
            glitchLine.className = 'glitch-line';
            glitchLine.style.animationDelay = `${Math.random() * 2}s`;
            distortionsContainer.appendChild(glitchLine);
        }
        
        // Random screen shake
        const shakeInterval = setInterval(() => {
            if (Math.random() > 0.8) {
                createScreenShake();
            }
        }, 3000);
        
        // Random color flash
        const flashInterval = setInterval(() => {
            if (Math.random() > 0.9) {
                flashScreen();
            }
        }, 5000);
        
        // Store intervals in a data attribute
        distortionsContainer.dataset.intervals = JSON.stringify([shakeInterval, flashInterval]);
    }
    
    function playChaoticAudio() {
        // Check if audio exists already
        let chaoticAudio = document.getElementById('chaotic-audio');
        
        if (!chaoticAudio) {
            chaoticAudio = document.createElement('audio');
            chaoticAudio.id = 'chaotic-audio';
            chaoticAudio.src = 'https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3';
            chaoticAudio.loop = true;
            document.body.appendChild(chaoticAudio);
        }
        
        chaoticAudio.volume = 0.3;
        chaoticAudio.playbackRate = 1.5;
        chaoticAudio.play();
    }
    
    function stopChaoticAudio() {
        const chaoticAudio = document.getElementById('chaotic-audio');
        if (chaoticAudio) {
            chaoticAudio.pause();
            chaoticAudio.remove();
        }
        
        // Clean up screen distortion intervals
        const distortions = document.querySelector('.screen-distortions');
        if (distortions && distortions.dataset.intervals) {
            const intervals = JSON.parse(distortions.dataset.intervals);
            intervals.forEach(interval => clearInterval(interval));
        }
    }
    
    // Confetti explosion for form submission
    function createConfettiExplosion() {
        const confettiContainer = document.createElement('div');
        confettiContainer.className = 'confetti-container';
        document.body.appendChild(confettiContainer);
        
        const colors = ['#ff00aa', '#00ff77', '#ff3300', '#0099ff', '#cc00ff', '#ffcc00'];
        
        // Create 200 confetti pieces
        for (let i = 0; i < 200; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            
            // Random shape
            const shapes = ['circle', 'square', 'triangle', 'line'];
            const shape = shapes[Math.floor(Math.random() * shapes.length)];
            confetti.classList.add(`confetti-${shape}`);
            
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confetti.style.animationDelay = Math.random() * 5 + 's';
            
            // Add CSS for different shapes
            if (shape === 'circle') {
                confetti.style.borderRadius = '50%';
            } else if (shape === 'triangle') {
                confetti.style.width = '0';
                confetti.style.height = '0';
                confetti.style.backgroundColor = 'transparent';
                confetti.style.borderLeft = '10px solid transparent';
                confetti.style.borderRight = '10px solid transparent';
                confetti.style.borderBottom = `20px solid ${confetti.style.backgroundColor}`;
            } else if (shape === 'line') {
                confetti.style.width = '5px';
                confetti.style.height = '30px';
            }
            
            confettiContainer.appendChild(confetti);
        }
        
        // Remove confetti after animation completes
        setTimeout(() => {
            confettiContainer.remove();
        }, 10000);
        
        // Add CSS for confetti
        const style = document.createElement('style');
        style.textContent = `
            .confetti-container {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 9999;
                pointer-events: none;
                overflow: hidden;
            }
            
            .confetti {
                position: absolute;
                top: -10px;
                width: 15px;
                height: 15px;
                animation: confetti-explosion 5s ease-in forwards;
            }
            
            @keyframes confetti-explosion {
                0% {
                    transform: translateY(0) rotate(0) scale(1);
                    opacity: 1;
                }
                25% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(100vh) rotate(720deg) scale(0.5);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Screen shake effect
    function createScreenShake() {
        const body = document.body;
        
        // Add CSS for shaking animation
        body.style.animation = 'screen-shake 0.5s ease-in-out';
        
        // Add the keyframes if they don't exist
        if (!document.querySelector('#screen-shake-keyframes')) {
            const style = document.createElement('style');
            style.id = 'screen-shake-keyframes';
            style.textContent = `
                @keyframes screen-shake {
                    0%, 100% {
                        transform: translateX(0) translateY(0);
                    }
                    10%, 30%, 50%, 70%, 90% {
                        transform: translateX(-10px) translateY(-5px);
                    }
                    20%, 40%, 60%, 80% {
                        transform: translateX(10px) translateY(5px);
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Remove the animation class after it's done
        setTimeout(() => {
            body.style.animation = '';
        }, 500);
    }
    
    // Flash screen effect
    function flashScreen() {
        const flashElement = document.createElement('div');
        flashElement.className = 'screen-flash';
        document.body.appendChild(flashElement);
        
        // Add CSS for flash animation
        const style = document.createElement('style');
        style.textContent = `
            .screen-flash {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(45deg, #ff00aa, #00ff77, #ff3300, #0099ff);
                opacity: 0;
                pointer-events: none;
                z-index: 9998;
                animation: screen-flash 0.5s ease-in-out;
            }
            
            @keyframes screen-flash {
                0%, 100% {
                    opacity: 0;
                }
                50% {
                    opacity: 0.5;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Remove the flash element after the animation
        setTimeout(() => {
            flashElement.remove();
        }, 500);
    }
    
    // Play random sound effect
    function playRandomSoundEffect() {
        const sounds = [
            'https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-explosion-2759.mp3',
            'https://assets.mixkit.co/sfx/preview/mixkit-arcade-retro-game-over-213.mp3',
            'https://assets.mixkit.co/sfx/preview/mixkit-arcade-space-shooter-dead-notification-272.mp3',
            'https://assets.mixkit.co/sfx/preview/mixkit-strange-animal-call-2786.mp3'
        ];
        
        const soundEffect = document.createElement('audio');
        soundEffect.src = sounds[Math.floor(Math.random() * sounds.length)];
        soundEffect.volume = 0.3;
        document.body.appendChild(soundEffect);
        
        soundEffect.play();
        
        // Remove the audio element when done
        soundEffect.onended = function() {
            this.remove();
        };
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (navMenu) {
                navMenu.classList.remove('active'); // Close mobile menu if open
            }
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Add a "glitch" effect before scrolling
                if (Math.random() > 0.5) {
                    flashScreen();
                }
                
                window.scrollTo({
                    top: target.offsetTop - 80, // Account for header height
                    behavior: 'smooth'
                });
            }
        });
    });
});