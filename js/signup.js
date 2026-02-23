const form = document.querySelector('.signup-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const terms = document.getElementById('terms').checked;

  if (!terms) {
    alert('Please agree to the terms & policy');
    return;
  }

  const userData = {
    name: name,
    email: email,
    password: password,
  };

  localStorage.setItem('user', JSON.stringify(userData));

  alert('Registration successful!');
  window.location.href = 'login.html';
});