// Function to handle user signup
function signupUser() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the email already exists
        const userExists = users.some(user => user.email === email);

        if (!userExists) {
            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Signup successful!');
            // Redirect to login page after successful signup (if required)
            window.location.href = 'login.html';
        } else {
            alert('Email already exists. Please use a different email or login.');
        }
    } else {
        alert('All fields are required!');
    }
}

// Function to handle user login
function loginUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert(`Welcome, ${user.username}!`);
        // Store session information
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        // Redirect to dashboard or homepage
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid email or password!');
    }
}

// Function to check if user is logged in (for session management)
function checkUserSession() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    
    if (loggedInUser) {
        document.getElementById('welcome-message').innerText = `Welcome back, ${loggedInUser.username}!`;
        // Display user-specific content
    } else {
        window.location.href = 'login.html'; // Redirect to login if not logged in
    }
}

// Function to handle user logout
function logoutUser() {
    localStorage.removeItem('loggedInUser');
    alert('You have been logged out.');
    window.location.href = 'login.html'; // Redirect to login page
}

