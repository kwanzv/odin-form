const form = document.getElementById("form");
form.noValidate = true;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  if (firstName.value.trim() === "") {
    firstName.focus();
    document.getElementById("first-name-helper").classList.remove("hidden");
    return;
  }

  if (!validateEmail(emailInput.value)) {
    emailInput.focus();
    document.getElementById("email-helper").classList.remove("hidden");
    return;
  }

  if (passwordInput.value.length < 6) {
    passwordInput.focus();
    document.getElementById("password-helper").classList.remove("hidden");
  }
});

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
