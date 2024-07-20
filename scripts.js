document.addEventListener('DOMContentLoaded', () => {
    const navbarLinks = document.querySelectorAll('#navbar a');
    
    navbarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    });
});

const nameDrop = document.querySelector('.name-drop');
const nameArray = nameDrop.textContent.split('');
nameDrop.innerHTML = '';

nameArray.forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.animationDelay = `${index * 0.1}s`;
    nameDrop.appendChild(span);
});

anime({
    targets: '.name-drop span',
    translateY: [50, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 1000,
    delay: anime.stagger(100)
});

// Smooth scroll to top
document.querySelector('.back-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
