// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hire Me Button Click
document.getElementById('hireBtn').addEventListener('click', () => {
    alert("Thanks for showing interest! Let's connect.");
});

// Contact Form Submit
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
    this.reset();
});
