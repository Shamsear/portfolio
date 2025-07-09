- rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateX = (y - centerY) / 10;
                    const rotateY = (centerX - x) / 10;
                    
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
                }
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            });

            // Click to expand effect
            card.addEventListener('click', (e) => {
                if (!e.target.closest('a')) {
                    card.classList.toggle('expanded');
                    
                    if (card.classList.contains('expanded')) {
                        card.style.transform = 'scale(1.1)';
                        card.style.zIndex = '1000';
                        card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                    } else {
                        card.style.transform = 'scale(1)';
                        card.style.zIndex = '';
                        card.style.boxShadow = '';
                    }
                }
            });
        });
    }

    // Skill Card Animations
    setupSkillCardAnimations() {
        document.querySelectorAll('.skill-card').forEach((card, index) => {
            // Staggered entrance animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, index * 100);
                        
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(card);

            // Hover glow effect
            card.addEventListener('mouseenter', () => {
                card.style.boxShadow = '0 10px 30px rgba(74, 107, 255, 0.3)';
                
                const icon = card.querySelector('.skill-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.2) rotate(10deg)';
                    icon.style.color = '#fff';
                    icon.style.background = 'var(--primary-color)';
                    icon.style.borderRadius = '50%';
                    icon.style.padding = '10px';
                }
            });

            card.addEventListener('mouseleave', () => {
                card.style.boxShadow = '';
                
                const icon = card.querySelector('.skill-icon');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0deg)';
                    icon.style.color = 'var(--primary-color)';
                    icon.style.background = '';
                    icon.style.borderRadius = '';
                    icon.style.padding = '';
                }
            });
        });
    }

    // Scroll Animations
    setupScrollAnimations() {
        // Parallax text effect
        const heroText = document.querySelector('.hero-content');
        if (heroText) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.3;
                heroText.style.transform = `translateY(${rate}px)`;
            });
        }

        // Section reveal animations
        document.querySelectorAll('section').forEach(section => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('section-visible');
                        
                        // Animate section title
                        const title = entry.target.querySelector('.section-title');
                        if (title) {
                            title.style.animation = 'slideInFromBottom 0.8s ease forwards';
                        }
                        
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });
            
            observer.observe(section);
        });
    }

    // Easter Eggs and Delightful Details
    setupEasterEggs() {
        // Konami code easter egg
        let konamiCode = [];
        const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
        
        document.addEventListener('keydown', (e) => {
            konamiCode.push(e.keyCode);
            
            if (konamiCode.length > konamiSequence.length) {
                konamiCode.shift();
            }
            
            if (konamiCode.join(',') === konamiSequence.join(',')) {
                this.activateEasterEgg();
                konamiCode = [];
            }
        });

        // Double click on logo
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.addEventListener('dblclick', () => {
                this.logoAnimation();
            });
        }

        // Long press on profile image
        const profileImg = document.querySelector('.image-container img');
        if (profileImg) {
            let pressTimer;
            
            profileImg.addEventListener('mousedown', () => {
                pressTimer = setTimeout(() => {
                    this.profileImageEasterEgg();
                }, 2000);
            });
            
            profileImg.addEventListener('mouseup', () => {
                clearTimeout(pressTimer);
            });
        }
    }

    activateEasterEgg() {
        // Create confetti effect
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                this.createConfetti();
            }, i * 50);
        }
        
        // Show message
        this.showEasterEggMessage('🎉 You found the secret! 🎉');
    }

    logoAnimation() {
        const logo = document.querySelector('.logo');
        logo.style.animation = 'spin 1s ease-in-out';
        
        setTimeout(() => {
            logo.style.animation = '';
        }, 1000);
    }

    profileImageEasterEgg() {
        const img = document.querySelector('.image-container img');
        img.style.filter = 'hue-rotate(180deg) saturate(2)';
        
        setTimeout(() => {
            img.style.filter = '';
        }, 3000);
        
        this.showEasterEggMessage('🌈 Rainbow mode activated! 🌈');
    }

    createConfetti() {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: hsl(${Math.random() * 360}, 100%, 50%);
            top: -10px;
            left: ${Math.random() * 100}vw;
            z-index: 10000;
            pointer-events: none;
            animation: confettiFall 3s linear forwards;
        `;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }

    showEasterEggMessage(message) {
        const messageEl = document.createElement('div');
        messageEl.textContent = message;
        messageEl.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--primary-color);
            color: white;
            padding: 20px 40px;
            border-radius: 10px;
            font-size: 1.2rem;
            font-weight: bold;
            z-index: 10001;
            animation: easterEggMessage 3s ease forwards;
        `;
        
        document.body.appendChild(messageEl);
        
        setTimeout(() => {
            messageEl.remove();
        }, 3000);
    }
}

// Additional CSS for micro-interactions
const microInteractionCSS = `
@keyframes clickRipple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

@keyframes slideInFromBottom {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes confettiFall {
    to {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
    }
}

@keyframes easterEggMessage {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.5);
    }
    20% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.1);
    }
    30% {
        transform: translate(-50%, -50%) scale(1);
    }
    90% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
    100% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.8);
    }
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.form-group.has-content {
    transform: scale(1.01);
}

.section-visible {
    opacity: 1;
    transform: translateY(0);
}

.project-card.expanded {
    position: relative;
    transition: all 0.3s ease;
}

nav {
    transition: transform 0.3s ease;
}

.nav-links a.active {
    color: var(--primary-color);
    font-weight: 600;
}
`;

// Inject micro-interaction CSS
const microStyle = document.createElement('style');
microStyle.textContent = microInteractionCSS;
document.head.appendChild(microStyle);

// Initialize micro-interactions
document.addEventListener('DOMContentLoaded', () => {
    new MicroInteractions();
});