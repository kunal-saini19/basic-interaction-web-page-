
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


const hoverTexts = document.querySelectorAll('.hover-text');

hoverTexts.forEach(text => {
    text.addEventListener('mouseover', function() {
        
        text.style.transition = "font-size 0.5s ease";
        text.style.fontSize = "36px";
    });

    text.addEventListener('mouseout', function() {
        
        text.style.transition = "font-size 0.5s ease";
        text.style.fontSize = "18px";
    });
});
