//This is a code for email and password validation using regex , code might change later due to use of angular js
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Validate email
function validateEmail(email) {
  return emailRegex.test(email);
}

// Validate password
function validatePassword(password) {
  return passwordRegex.test(password);
}


const emailInput = document.getElementById('email');
const password1Input = document.getElementById('password1');
const password2Input = document.getElementById('password2');
const submitButton = document.getElementById('logsubmit');

function checkInput() {
    console.log("hello");
    console.log(emailInput)
  if (!validateEmail(emailInput.value)) {
    alert('Invalid email address');
    event.preventDefault();
  }

  if (!validatePassword(password1Input.value)) {
    alert('Invalid password');
    event.preventDefault();
  }
  else
  {
    if(password1Input.value !== password2Input.value)
    {
        alert('Password mismatch');
        event.preventDefault();
    }
}
}
