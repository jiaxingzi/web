import flask from Flask;
const loginForm = document.querySelector('#login-form');
const loginErrorMessage = document.querySelector('#login-error-message');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === 'myusername' && password === 'mypassword') {
    window.location.href = 'home.html'; // Replace with your actual home page URL
  } else {
    loginErrorMessage.textContent = 'Incorrect username or password';
  }
});
