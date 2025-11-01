document.addEventListener('DOMContentLoaded', () => {

    const header = document.getElementById('header');
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const navLinks = document.getElementById('nav-links');
    const themeToggle = document.getElementById('theme-switch-checkbox');
    const currentTheme = localStorage.getItem('theme');

    // 1. Sticky Navigation
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    };

    window.addEventListener('scroll', handleScroll);

    // 2. Mobile Navigation Toggle
    mobileNavToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Toggle icon
        const icon = mobileNavToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.setAttribute('data-feather', 'x');
        } else {
            icon.setAttribute('data-feather', 'menu');
        }
        feather.replace(); // Re-render icons
    });

    // Close mobile nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileNavToggle.querySelector('i').setAttribute('data-feather', 'menu');
                feather.replace();
            }
        });
    });

    // 3. Dark/Light Mode Toggle
    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.checked = false; // Assuming light mode means unchecked
    } else {
        document.body.classList.remove('light-mode'); // Default is dark
        themeToggle.checked = true; // Assuming dark mode means checked
    }

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        }
    });

    // 4. Reveal-on-Scroll Animation (using IntersectionObserver)
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.revealDelay || '0s';
                entry.target.style.transitionDelay = delay;
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 5. Animated Number Counters
    const statNumbers = document.querySelectorAll('.stat-number');

    const animateCounter = (el) => {
        const target = +el.dataset.target;
        const duration = 2000; // 2 seconds
        const stepTime = 20; // update every 20ms
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                el.textContent = Math.floor(target);
                clearInterval(timer);
            } else {
                el.textContent = Math.floor(current);
            }
        }, stepTime);
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    statNumbers.forEach(el => {
        counterObserver.observe(el);
    });

    // 6. Portfolio Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.dataset.filter;

            // Filter items
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.classList.remove('hide');
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                    item.classList.add('hide');
                }
            });
        });
    });

    // 7. Initial Icon Render
    feather.replace();
});