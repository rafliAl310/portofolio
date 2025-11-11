        // ==================== TYPEWRITER EFFECT ====================
        function initTypewriter() {
            const element = document.getElementById('typewriter-name');
            const texts = [
                'RAFLI ALWINSYAH',
                'NETWORK SORCERER',
                'VPN ENCHANTER',
                'DNS WARD KEEPER',
                'SECURITY GUARDIAN',
                'DIGITAL PROTECTOR'
            ];
            
            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            let typingSpeed = 100;

            function type() {
                const currentText = texts[textIndex];
                
                if (isDeleting) {
                    element.innerHTML = currentText.substring(0, charIndex - 1) + '<span class="cursor">|</span>';
                    charIndex--;
                    typingSpeed = 50;
                } else {
                    element.innerHTML = currentText.substring(0, charIndex + 1) + '<span class="cursor">|</span>';
                    charIndex++;
                    typingSpeed = 100;
                }

                if (!isDeleting && charIndex === currentText.length) {
                    typingSpeed = 2000;
                    isDeleting = true;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    typingSpeed = 500;
                }

                setTimeout(type, typingSpeed);
            }

            type();
        }

        // ==================== PARTICLE ANIMATION ====================
        function initParticles() {
            const canvas = document.getElementById('particles-canvas');
            const ctx = canvas.getContext('2d');
            
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const particles = [];
            const particleCount = 80;

            class Particle {
                constructor() {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                    this.size = Math.random() * 2.5 + 1;
                    this.speedX = Math.random() * 0.3 - 0.15;
                    this.speedY = Math.random() * 0.3 - 0.15;
                    this.opacity = Math.random() * 0.6 + 0.2;
                    this.color = Math.random() > 0.5 ? 'rgba(157, 78, 221,' : 'rgba(212, 175, 55,';
                }

                update() {
                    this.x += this.speedX;
                    this.y += this.speedY;

                    if (this.x > canvas.width) this.x = 0;
                    if (this.x < 0) this.x = canvas.width;
                    if (this.y > canvas.height) this.y = 0;
                    if (this.y < 0) this.y = canvas.height;
                }

                draw() {
                    ctx.fillStyle = this.color + this.opacity + ')';
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                    
                    // Glow effect
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = this.color + this.opacity + ')';
                }
            }

            function init() {
                for (let i = 0; i < particleCount; i++) {
                    particles.push(new Particle());
                }
            }

            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                for (let i = 0; i < particles.length; i++) {
                    particles[i].update();
                    particles[i].draw();
                }

                requestAnimationFrame(animate);
            }

            init();
            animate();

            window.addEventListener('resize', () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            });
        }

        // ==================== FORM SUBMISSION ====================
        function handleSubmit(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            alert(`🏰 Greetings ${name}!\n\nYour raven has been dispatched!\n\nThe guardian shall respond to ${email} post-haste!`);
            
            event.target.reset();
        }

        // ==================== SMOOTH SCROLLING ====================
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // ==================== INITIALIZE ====================
        window.addEventListener('load', () => {
            initTypewriter();
            initParticles();
        });

        // ==================== SCROLL REVEAL ANIMATION ====================
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.gothic-card, .project-scroll, .chronicle-entry, .skill-tome').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(50px)';
                el.style.transition = 'all 0.8s ease';
                observer.observe(el);
            });
        });

        // Ambil elemen
const modal = document.getElementById("photoModal");
const img = document.getElementById("profilePhoto");
const modalImg = document.getElementById("photoEnlarged");
const closeBtn = document.getElementsByClassName("close")[0];

// Saat foto diklik → tampilkan modal
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Saat tombol "x" diklik → tutup modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Klik area di luar foto → tutup modal
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
