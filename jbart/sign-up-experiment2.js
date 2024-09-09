const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const passwordRepeatInput = document.getElementById("password-repeat-input");
const checkbox = document.getElementById("checkbox");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const passwordRepeatError = document.getElementById("psw-repeat-error");
const checkboxError = document.getElementById("checkbox-error");
const form = document.getElementById("login-form");

form.addEventListener("submit", function (event) {
  // Clear previous errors
  emailError.innerHTML = "";
  passwordError.innerHTML = "";
  passwordRepeatError.innerHTML = "";
  checkboxError.innerHTML = "";

  // Email Validation
  const emailValue = emailInput.value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(emailValue)) {
    emailError.innerHTML = "Please enter a valid email.";
    event.preventDefault();
  }

  // Password Validation
  if (passwordInput.value.length < 8) {
    passwordError.innerHTML = "Password must be at least 8 characters.";
    event.preventDefault();
  }

  // Password Repeat Validation
  if (passwordInput.value !== passwordRepeatInput.value) {
    passwordRepeatError.innerHTML = "Passwords do not match.";
    event.preventDefault();
  }

  // Checkbox Validation
  if (!checkbox.checked) {
    checkboxError.innerHTML = "You must agree to remember me.";
    event.preventDefault();
  }
});