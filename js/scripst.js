document.getElementById('burger').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    const burger = document.getElementById('burger');
    
    navLinks.classList.toggle('show');
    burger.classList.toggle('active');
});
