// Smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.fade-in');
    const screenPosition = window.innerHeight / 1.5;

    sections.forEach(section => {
        const sectionPos = section.getBoundingClientRect().top;
        if (sectionPos < screenPosition) {
            section.classList.add('fade-in-visible');
        }
    });
});