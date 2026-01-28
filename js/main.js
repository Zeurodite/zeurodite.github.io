// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
        
        // Update active state
        document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

// Update active nav on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.work-card, .commission-status, .reveal').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// Navbar background on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.8)';
    }
    
    lastScroll = currentScroll;
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / 800);
    }
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = e.target.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = 'Sending...';
        submitBtn.disabled = true;
        
        // Get form data
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            service: e.target.service.value,
            message: e.target.message.value
        };

        // Here you would send to your backend or email service
        // Example with EmailJS or Formspree:
        // await fetch('YOUR_ENDPOINT', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        // });
        
        // Simulate form submission
        setTimeout(() => {
            submitBtn.innerHTML = '✓ Message Sent!';
            submitBtn.style.background = 'var(--accent-green)';
            
            // Reset form
            e.target.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = 'var(--cyan-primary)';
                submitBtn.disabled = false;
            }, 3000);
        }, 1500);
    });
}

// Smooth scroll to sections from work cards
document.querySelectorAll('.card-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Project filtering
const filterTags = document.querySelectorAll('.filter-tag');
const projectCards = document.querySelectorAll('.project-card');

filterTags.forEach(tag => {
    tag.addEventListener('click', () => {
        const filter = tag.dataset.filter;
        
        // Update active state
        filterTags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');
        
        // Filter projects
        projectCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
            } else {
                const categories = card.dataset.category;
                if (categories && categories.includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });
});

// Reduce motion toggle
const motionToggle = document.getElementById('motionToggle');
if (motionToggle) {
    const savedPreference = localStorage.getItem('reduceMotion');

    if (savedPreference === 'true') {
        document.body.classList.add('reduce-motion');
        motionToggle.querySelector('span:last-child').textContent = 'Enable Motion';
    }

    motionToggle.addEventListener('click', () => {
        document.body.classList.toggle('reduce-motion');
        const isReduced = document.body.classList.contains('reduce-motion');
        
        motionToggle.querySelector('span:last-child').textContent = 
            isReduced ? 'Enable Motion' : 'Reduce Motion';
        
        localStorage.setItem('reduceMotion', isReduced);
    });
}

// Animate stat numbers on scroll
const statNumbers = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const target = entry.target;
            const text = target.textContent;
            const number = parseInt(text);
            
            if (!isNaN(number)) {
                let current = 0;
                const increment = number / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= number) {
                        target.textContent = text;
                        clearInterval(timer);
                    } else {
                        target.textContent = Math.floor(current) + (text.includes('+') ? '+' : '');
                    }
                }, 30);
                target.classList.add('animated');
            }
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(num => statsObserver.observe(num));
