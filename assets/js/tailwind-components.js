// Create modern UI components using Tailwind CSS
document.addEventListener('DOMContentLoaded', () => {
    // Add a floating action button
    createFloatingActionButton();
    
    // Add a theme toggle button
    createThemeToggle();
    
    // Add a scroll-to-top button
    createScrollToTopButton();
    
    // Add a notification banner
    createWelcomeBanner();
});

// Floating Action Button for quick contact
function createFloatingActionButton() {
    const fab = document.createElement('div');
    fab.className = 'fixed bottom-6 right-6 z-50';
    fab.innerHTML = `
        <div class="relative group">
            <button class="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg transform transition-transform duration-300 hover:scale-110 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            </button>
            <div class="absolute bottom-full right-0 mb-3 hidden group-hover:block">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300">
                    <a href="mailto:shamsear@gmail.com" class="flex items-center px-4 py-3 hover:bg-gray-100 transition duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email
                    </a>
                    <a href="tel:+971543641091" class="flex items-center px-4 py-3 hover:bg-gray-100 transition duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call
                    </a>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(fab);
}

// Theme Toggle (Light/Dark mode)
function createThemeToggle() {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the saved theme
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
    }
    
    // Create toggle button
    const themeToggle = document.createElement('div');
    themeToggle.className = 'fixed top-20 right-6 z-50';
    themeToggle.innerHTML = `
        <button id="theme-toggle" class="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none transition-colors duration-200">
            <svg id="theme-toggle-dark-icon" class="${savedTheme === 'dark' ? 'hidden' : ''} w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg id="theme-toggle-light-icon" class="${savedTheme === 'dark' ? '' : 'hidden'} w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
        </button>
    `;
    document.body.appendChild(themeToggle);
    
    // Add event listener to toggle button
    const toggleButton = document.getElementById('theme-toggle');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');
    
    toggleButton.addEventListener('click', () => {
        // Toggle dark mode
        document.documentElement.classList.toggle('dark');
        
        // Toggle icons
        darkIcon.classList.toggle('hidden');
        lightIcon.classList.toggle('hidden');
        
        // Save preference to localStorage
        if (document.documentElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}

// Scroll To Top Button
function createScrollToTopButton() {
    const scrollToTopBtn = document.createElement('div');
    scrollToTopBtn.className = 'fixed bottom-6 left-6 z-50 opacity-0 transition-opacity duration-300';
    scrollToTopBtn.id = 'scroll-to-top';
    scrollToTopBtn.innerHTML = `
        <button class="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-lg transform transition-transform duration-300 hover:scale-110 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
            </svg>
        </button>
    `;
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide scroll to top button based on scroll position
    window.addEventListener('scroll', () => {
        const scrollToTopBtn = document.getElementById('scroll-to-top');
        
        if (window.scrollY > 300) {
            scrollToTopBtn.style.opacity = '1';
        } else {
            scrollToTopBtn.style.opacity = '0';
        }
    });
    
    // Add click event to scroll to top
    document.getElementById('scroll-to-top').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Welcome Banner
function createWelcomeBanner() {
    // Only show the banner if it's a new session
    if (sessionStorage.getItem('bannerShown')) {
        return;
    }
    
    const banner = document.createElement('div');
    banner.className = 'fixed bottom-0 inset-x-0 pb-2 sm:pb-5 z-50';
    banner.innerHTML = `
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="p-2 rounded-lg bg-primary shadow-lg sm:p-3">
                <div class="flex items-center justify-between flex-wrap">
                    <div class="w-0 flex-1 flex items-center">
                        <span class="flex p-2 rounded-lg bg-primary-dark">
                            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                            </svg>
                        </span>
                        <p class="ml-3 font-medium text-white truncate">
                            <span class="md:hidden">Welcome to my portfolio!</span>
                            <span class="hidden md:inline">Welcome to my portfolio! Feel free to explore my projects and skills.</span>
                        </p>
                    </div>
                    <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                        <button id="close-banner" type="button" class="-mr-1 flex p-2 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-white">
                            <span class="sr-only">Dismiss</span>
                            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(banner);
    
    // Mark banner as shown for this session
    sessionStorage.setItem('bannerShown', 'true');
    
    // Add click event to close button
    document.getElementById('close-banner').addEventListener('click', () => {
        banner.remove();
    });
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        if (banner.parentNode) {
            banner.remove();
        }
    }, 5000);
}

// Add Tailwind CSS classes to existing elements
document.addEventListener('DOMContentLoaded', () => {
    // Add Tailwind classes to section titles for enhanced styling
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.classList.add('text-3xl', 'md:text-4xl', 'font-bold', 'mb-12');
    });
    
    // Add Tailwind classes to buttons for improved hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.classList.add('transform', 'transition', 'duration-300', 'hover:shadow-lg');
    });
    
    // Add Tailwind classes to project cards for improved animations
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.classList.add('transition', 'duration-300', 'hover:shadow-xl');
    });
}); 