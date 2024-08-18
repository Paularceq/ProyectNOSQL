document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // For simplicity, using hardcoded credentials for this example
    const validUsername = "admin";
    const validPassword = "password123";

    if (username === validUsername && password === validPassword) {
        // Redirect to the home page
        window.location.href = "../html/home.html";
    } else {
        // Display an error message
        alert("Usuario o contraseña incorrecta. Inténtalo de nuevo.");
    }
});
