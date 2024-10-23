document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    let email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    let isValid = true;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        document.getElementById('emailError').textContent = 'Email address is required.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (!password) {
        document.getElementById('passwordError').textContent = 'Password is required.';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    console.log('Form is valid:', isValid);

    if (isValid) {
        alert('Login successful!');
        window.location.href = '../index.html';
    }
});