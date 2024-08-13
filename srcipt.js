document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners for forms here
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const paymentForm = document.getElementById('payment-form');

    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();
            // Handle registration logic
            alert('Registration form submitted');
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            // Handle login logic
            alert('Login form submitted');
        });
    }

    if (paymentForm) {
        paymentForm.addEventListener('submit', function (event) {
            event.preventDefault();
            // Handle payment logic
            alert('Payment form submitted');
        });
    }
});


