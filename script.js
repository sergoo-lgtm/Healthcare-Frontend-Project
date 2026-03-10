window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

const counters = document.querySelectorAll('.counter');
let hasCounted = false;

function animateCounters() {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const speed = 200;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    reveals.forEach(revealElement => {
        const elementTop = revealElement.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            revealElement.classList.add('active');
        }
    });

    const infoSection = document.querySelector('.info');
    if (infoSection) {
        const infoTop = infoSection.getBoundingClientRect().top;
        if (infoTop < windowHeight - elementVisible && !hasCounted) {
            animateCounters();
            hasCounted = true;
        }
    }
}

window.addEventListener('scroll', reveal);
reveal();