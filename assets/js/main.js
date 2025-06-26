// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const header = document.querySelector('header');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li');
    const sections = document.querySelectorAll('section');
    const contactForm = document.querySelector('#contactForm');

    // Sticky Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            header.style.backgroundColor = '#ffffff';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            header.style.backgroundColor = '#ffffff';
        }
        
        // Active menu based on scroll position
        updateActiveMenu();
    });

    // Mobile Menu Toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a nav link
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Smooth scroll to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active menu item based on scroll position
    function updateActiveMenu() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinksItems.forEach(li => {
            li.querySelector('a').classList.remove('active');
            if (li.querySelector(`a[href="#${current}"]`)) {
                li.querySelector(`a[href="#${current}"]`).classList.add('active');
            }
        });
    }

    // Form submission
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Basic form validation
            if (!name || !email || !subject || !message) {
                showAlert('Please fill in all fields', 'error');
                return;
            }
            
            // Email validation
            if (!isValidEmail(email)) {
                showAlert('Please enter a valid email address', 'error');
                return;
            }
            
            // In a real application, you would send the form data to a server here
            // For demonstration purposes, we'll just show a success message
            showAlert('Message sent successfully!', 'success');
            contactForm.reset();
        });
    }

    // Helper functions
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Show alert message
    function showAlert(message, type) {
        // Create alert element
        const alertEl = document.createElement('div');
        alertEl.className = `alert ${type === 'success' ? 'alert-success' : 'alert-error'}`;
        alertEl.textContent = message;
        
        // Style the alert
        alertEl.style.position = 'fixed';
        alertEl.style.top = '20px';
        alertEl.style.right = '20px';
        alertEl.style.padding = '12px 20px';
        alertEl.style.borderRadius = '5px';
        alertEl.style.color = '#fff';
        alertEl.style.zIndex = '1000';
        alertEl.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        
        if (type === 'success') {
            alertEl.style.backgroundColor = '#28a745';
        } else {
            alertEl.style.backgroundColor = '#dc3545';
        }
        
        // Add to DOM
        document.body.appendChild(alertEl);
        
        // Remove after 3 seconds
        setTimeout(() => {
            alertEl.remove();
        }, 3000);
    }

    // Animate sections on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.project-card, .skill-card, .education-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial styles for animation
    const elements = document.querySelectorAll('.project-card, .skill-card, .education-card');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger first animation
    animateOnScroll();

    // Listen for scroll to trigger animations
    window.addEventListener('scroll', animateOnScroll);

    // Typing effect for hero section
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero h2');
    const heroParagraph = document.querySelector('.hero p');
    const ctaButtons = document.querySelector('.cta-buttons');
    const socialLinks = document.querySelector('.hero .social-links');
    
    if (heroTitle && heroSubtitle && heroParagraph && ctaButtons && socialLinks) {
        // Set initial opacity
        heroTitle.style.opacity = '0';
        heroSubtitle.style.opacity = '0';
        heroParagraph.style.opacity = '0';
        ctaButtons.style.opacity = '0';
        socialLinks.style.opacity = '0';
        
        // Add transition
        heroTitle.style.transition = 'opacity 0.8s ease';
        heroSubtitle.style.transition = 'opacity 0.8s ease 0.3s';
        heroParagraph.style.transition = 'opacity 0.8s ease 0.6s';
        ctaButtons.style.transition = 'opacity 0.8s ease 0.9s';
        socialLinks.style.transition = 'opacity 0.8s ease 1.2s';
        
        // Show elements with delay
        setTimeout(() => {
            heroTitle.style.opacity = '1';
        }, 100);
        
        setTimeout(() => {
            heroSubtitle.style.opacity = '1';
        }, 400);
        
        setTimeout(() => {
            heroParagraph.style.opacity = '1';
        }, 700);
        
        setTimeout(() => {
            ctaButtons.style.opacity = '1';
        }, 1000);
        
        setTimeout(() => {
            socialLinks.style.opacity = '1';
        }, 1300);
    }

    // Initialize AOS (Animate on Scroll) if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true
        });
    }

    // Add animation to skills section
    const animateSkills = () => {
        const skillsSection = document.querySelector('.skills');
        if (!skillsSection) return;
        
        const skillBars = document.querySelectorAll('.skill-bar');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillBars.forEach(bar => {
                        const width = bar.style.width;
                        bar.style.width = '0';
                        setTimeout(() => {
                            bar.style.transition = 'width 1s ease-in-out';
                            bar.style.width = width;
                        }, 200);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(skillsSection);
    };
    
    animateSkills();
}); 