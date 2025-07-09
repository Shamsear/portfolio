// Advanced Interactions and Animations
class AdvancedPortfolio {
    constructor() {
        this.init();
        this.setupCursor();
        this.setupParticles();
        this.setupScrollEffects();
        this.setupMagneticElements();
        this.setupIntersectionObserver();
        this.setupAdvancedAnimations();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
        } else {
            this.initializeComponents();
        }
    }

    initializeComponents() {
        this.createScrollProgress();
        this.enhanceButtons();
        this.setupParallax();
        this.initializeSkillBars();
        this.setupFormAnimations();
        this.createMorphingShapes();
    }

    // Custom Cursor
    setupCursor() {
        if (window.innerWidth > 768) {
            const cursor = document.createElement('div');
            const cursorOutline = document.createElement('div');
            
            cursor.className = 'cursor-dot';
            cursorOutline.className = 'cursor-outline';
            
            document.body.appendChild(cursor);
            document.body.appendChild(cursorOutline);

            let mouseX = 0, mouseY = 0;
            let outlineX = 0, outlineY = 0;

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                
                cursor.style.left = mouseX + 'px';
                cursor.style.top = mouseY + 'px';
            });

            // Smooth follow for outline
            const animateOutline = () => {
                outlineX += (mouseX - outlineX) * 0.1;
                outlineY += (mouseY - outlineY) * 0.1;
                
                cursorOutline.style.left = outlineX - 20 + 'px';
                cursorOutline.style.top = outlineY - 20 + 'px';
                
                requestAnimationFrame(animateOutline);
            };
            animateOutline();

            // Cursor interactions
            document.querySelectorAll('a, button, .btn').forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursor.style.transform = 'scale(2)';
                    cursorOutline.style.transform = 'scale(1.5)';
                });
                
                el.addEventListener('mouseleave', () => {
                    cursor.style.transform = 'scale(1)';
                    cursorOutline.style.transform = 'scale(1)';
                });
            });
        }
    }

    // Particle System
    setupParticles() {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        hero.appendChild(particlesContainer);

        const createParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
            particle.style.animationDelay = Math.random() * 5 + 's';
            
            particlesContainer.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 25000);
        };

        // Create initial particles
        for (let i = 0; i < 20; i++) {
            setTimeout(createParticle, i * 500);
        }

        // Continue creating particles
        setInterval(createParticle, 2000);
    }

    // Scroll Progress Indicator
    createScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }

    // Enhanced Button Effects
    enhanceButtons() {
        document.querySelectorAll('.btn').forEach(btn => {
            btn.classList.add('btn-advanced', 'btn-magnetic', 'btn-liquid');
            
            // Add ripple effect
            btn.addEventListener('click', (e) => {
                const ripple = document.createElement('span');
                const rect = btn.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                btn.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });
    }

    // Magnetic Effect
    setupMagneticElements() {
        document.querySelectorAll('.btn, .project-card, .skill-card').forEach(el => {
            el.classList.add('magnetic');
            
            el.addEventListener('mousemove', (e) => {
                if (window.innerWidth > 768) {
                    const rect = el.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    
                    el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
                }
            });
            
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translate(0, 0)';
            });
        });
    }

    // Parallax Scrolling
    setupParallax() {
        const parallaxElements = document.querySelectorAll('.floating-element, .morphing-blob');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach((el, index) => {
                const speed = 0.5 + (index * 0.1);
                const yPos = -(scrolled * speed);
                el.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    // Intersection Observer for Animations
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Stagger animations for child elements
                    const children = entry.target.querySelectorAll('.stagger-animation');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('animate-in');
                        }, index * 100);
                    });
                }
            });
        }, observerOptions);

        // Observe sections and cards
        document.querySelectorAll('section, .project-card, .skill-card, .education-card').forEach(el => {
            observer.observe(el);
        });
    }

    // Advanced Skill Bar Animations
    initializeSkillBars() {
        const skillBars = document.querySelectorAll('.skill-bar');
        
        skillBars.forEach(bar => {
            bar.classList.add('skill-bar-advanced');
            const width = bar.style.width;
            bar.style.width = '0%';
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.width = width;
                        }, 500);
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(bar);
        });
    }

    // Scroll Effects
    setupScrollEffects() {
        let ticking = false;
        
        const updateScrollEffects = () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            // Parallax background elements
            document.querySelectorAll('.parallax-element').forEach(el => {
                el.style.transform = `translateY(${rate}px)`;
            });
            
            ticking = false;
        };
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        });
    }

    // Form Animations
    setupFormAnimations() {
        const formGroups = document.querySelectorAll('.form-group');
        
        formGroups.forEach(group => {
            const input = group.querySelector('input, textarea');
            const label = group.querySelector('label');
            
            if (input && label) {
                group.classList.add('form-floating-label');
                
                input.addEventListener('focus', () => {
                    group.classList.add('focused');
                });
                
                input.addEventListener('blur', () => {
                    if (!input.value) {
                        group.classList.remove('focused');
                    }
                });
                
                // Check if input has value on load
                if (input.value) {
                    group.classList.add('focused');
                }
            }
        });
    }

    // Create Morphing Background Shapes
    createMorphingShapes() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach((section, index) => {
            if (index % 2 === 0) {
                const blob = document.createElement('div');
                blob.className = 'morphing-blob';
                blob.style.position = 'absolute';
                blob.style.width = '300px';
                blob.style.height = '300px';
                blob.style.top = Math.random() * 50 + '%';
                blob.style.right = Math.random() * 20 + '%';
                blob.style.zIndex = '-1';
                blob.style.animationDelay = Math.random() * 5 + 's';
                
                section.style.position = 'relative';
                section.appendChild(blob);
            }
        });
    }

    // Advanced Text Animations
    setupAdvancedAnimations() {
        // Typewriter effect for hero title
        const heroTitle = document.querySelector('.hero h1');
        if (heroTitle) {
            heroTitle.classList.add('typewriter');
        }

        // Gradient text animation
        const highlights = document.querySelectorAll('.highlight');
        highlights.forEach(el => {
            el.classList.add('gradient-text');
        });

        // Text reveal animation
        const sectionTitles = document.querySelectorAll('.section-title');
        sectionTitles.forEach(title => {
            title.classList.add('text-reveal');
        });
    }
}

// Smooth Scroll Enhancement
class SmoothScroll {
    constructor() {
        this.setupSmoothScroll();
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                
                if (target) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    this.smoothScrollTo(targetPosition, 1000);
                }
            });
        });
    }

    smoothScrollTo(target, duration) {
        const start = window.pageYOffset;
        const distance = target - start;
        let startTime = null;

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = this.easeInOutQuad(timeElapsed, start, distance, duration);
            
            window.scrollTo(0, run);
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    }

    easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
}

// Performance Monitor
class PerformanceMonitor {
    constructor() {
        this.setupPerformanceOptimizations();
    }

    setupPerformanceOptimizations() {
        // Lazy load images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }

        // Debounce scroll events
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            scrollTimeout = setTimeout(() => {
                // Scroll event handling
            }, 10);
        });

        // Optimize animations for mobile
        if (window.innerWidth <= 768) {
            document.body.classList.add('mobile-optimized');
        }
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new AdvancedPortfolio();
    new SmoothScroll();
    new PerformanceMonitor();
});

// Add CSS for ripple effect
const rippleCSS = `
.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
}

@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

.animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

.mobile-optimized .card-3d:hover,
.mobile-optimized .card-tilt:hover {
    transform: none !important;
}

.mobile-optimized .morphing-blob {
    display: none !important;
}
`;

// Inject CSS
const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);