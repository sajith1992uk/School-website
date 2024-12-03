function validated() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
    
    if (username === '' || password === '') {
        errorMessage.textContent = 'Both fields are required';
        return false;
    }
    
    // Example of hard-coded credentials validation for demonstration
    // In a real application, this validation should be done on the server-side
    if (username !== 'staffmember' || password !== 'letmein!123') {
        errorMessage.textContent = 'Invalid username or password';
        return false;
    }
    
    errorMessage.textContent = '';
    return true;
}
function togglePassword() {
    const passwordField = document.getElementById('password');
    const showPasswordText = document.querySelector('.show-password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        showPasswordText.textContent = 'Hide';
    } else {
        passwordField.type = 'password';
        showPasswordText.textContent = 'Show';
    }
}
