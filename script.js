// script.js - Brooklyn Millwork Website

document.addEventListener('DOMContentLoaded', function () {

    // =============== MOBILE MENU ===============
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;

    mobileMenuButton.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            mobileMenu.classList.remove('hidden');
            mobileMenuButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            mobileMenu.classList.add('hidden');
            mobileMenuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    });

    // Close mobile menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            isMenuOpen = false;
            mobileMenuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });

    // =============== SMOOTH SCROLLING ===============
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // =============== FORM SUBMISSION ===============
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const name = document.querySelector('input[type="text"]');
            const email = document.querySelector('input[type="email"]');
            
            if (name && email) {
                alert(`Thank you, ${name.value.split(' ')[0]}!\n\nYour message has been received.\nA Brooklyn Millwork representative will contact you shortly.`);
                contactForm.reset();
            }
        });
    }

    // =============== ACTIVE NAV LINK ON SCROLL ===============
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('#desktop-menu a');

    function updateActiveLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-amber-800', 'font-semibold');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-amber-800', 'font-semibold');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);

    // =============== BACK TO TOP BUTTON (Optional) ===============
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    backToTop.className = 'fixed bottom-8 right-8 bg-amber-800 text-white w-12 h-12 rounded-full shadow-lg hidden items-center justify-center text-xl hover:bg-amber-900 transition-all z-50';
    document.body.appendChild(backToTop);

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
            backToTop.classList.remove('hidden');
            backToTop.classList.add('flex');
        } else {
            backToTop.classList.add('hidden');
            backToTop.classList.remove('flex');
        }
    });

    console.log('%c✅ Brooklyn Millwork website with script.js loaded successfully!', 'color: #8B5A2B; font-size: 14px;');
});