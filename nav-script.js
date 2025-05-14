const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('mobile-nav');

navToggle.addEventListener('click', function() {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !expanded);
    navLinks.classList.toggle('nav-open');
    document.body.classList.toggle('nav-overlay', !expanded);
});
navLinks.addEventListener('click', function(e) {
    if(e.target.tagName === 'A') {
    navLinks.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-overlay');
    }
});
document.addEventListener('click', function(e) {
    if(window.innerWidth > 600) return;
    if(navLinks.classList.contains('nav-open') && !navLinks.contains(e.target) && !navToggle.contains(e.target)) {
    navLinks.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-overlay');
    }
});