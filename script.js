// Event listener for form submission
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to validate first

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let valid = true;

    // Username validation
    if (username === '') {
        document.getElementById('usernameMessage').textContent = "Username is required.";
        valid = false;
    } else {
        document.getElementById('usernameMessage').textContent = "";
    }

    // Password validation
    if (password === '') {
        document.getElementById('passwordMessage').textContent = "Password is required.";
        valid = false;
    } else {
        document.getElementById('passwordMessage').textContent = "";
    }

    // If both fields are valid, submit the form (simulated with an alert)
    if (valid) {
        alert('Form submitted successfully!');
        // Simulate form submission or further actions here.
    }
});

// Event listener for the toggle password visibility button
document.getElementById('togglePasswordBtn').addEventListener('click', function() {
    let passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';  // Show password
    } else {
        passwordField.type = 'password';  // Hide password
    }
});
