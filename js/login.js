const form = document.querySelector('.login-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (!storedUser) {
    alert('No registered user found');
    return;
  }

  if (
    email === storedUser.email &&
    password === storedUser.password
  ) {
    alert(`Welcome, ${storedUser.name}! You are logged in.`);
  } else {
    alert('Invalid email or password');
  }
});