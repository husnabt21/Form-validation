const nameInput = document.getElementById('name');

const passwordInput = document.getElementById('password'); 

const emailInput = document.getElementById('email');

const form = document.getElementById('form');

const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = [];

    if (nameInput.value.trim() === '') {
        messages.push('Name is required');
    }

    if (passwordInput.value.trim() === '') {
        messages.push('Password is required');
    } else {
        if (passwordInput.value.length < 6) {
            messages.push('Password must be at least 6 characters');
        }
        if (passwordInput.value.length > 20) {
            messages.push('Password must be less than 20 characters');
        }
        if (passwordInput.value.toLowerCase() === 'password') {
            messages.push('Password cannot be "password"');
        }
    }

    if (!emailInput.value.includes('@') || emailInput.value.startsWith('@') || emailInput.value.endsWith('@')) {
        messages.push('Email must be valid and contain @');
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join('\n');
    }
});
