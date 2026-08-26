let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
      menu.classList.toggle('bx-x')
      navbar.classList.toggle('active')
}

window.onscroll = () =>{
      menu.classList.remove('bx-x')
      navbar.classList.remove('active')
}




document.addEventListener("DOMContentLoaded", function() {
    const sr = ScrollReveal({
        distance: '60px',
        duration: 2500,
        delay: 150,
        reset: true
    });

    // Function to initialize ScrollReveal animations
    function initScrollReveal() {
        sr.reveal('.text', { delay: 200, origin: 'top' });
        sr.reveal('.form-container form', { delay: 200, origin: 'left' });
        sr.reveal('.heading', { delay: 200, origin: 'top' });
        sr.reveal('.ride-container .box', { delay: 200, origin: 'top' });
        sr.reveal('.services-container .box', { delay: 200, origin: 'top' });
        sr.reveal('.about-container', { delay: 200, origin: 'top' });
        sr.reveal('.reviews-container', { delay: 200, origin: 'top' });
        sr.reveal('.newsletter .box', { delay: 200, origin: 'bottom' });
    }

    // Function to navigate to the login page
    function goToLoginPage() {
        // Replace 'login.html' with the actual URL of your login page
        window.location.href = 'sign.html';
    }

    // Event listener for triggering ScrollReveal animations
    window.addEventListener('load', function() {
        initScrollReveal();
    });

    // Event listener for toggling sign-in form visibility
    const signInLink = document.querySelector('.sign-up');
    signInLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        goToLoginPage();
    });
});