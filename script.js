const loginForm = document.getElementById("login");
const registerForm = document.getElementById("register");
const formChangers = document.querySelectorAll(".changer");
const formContainer = document.querySelector(".form-container");

const passwordInput = document.getElementById("reg-password");
const confirmPasswordInput = document.getElementById("reg-confirm");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const registerBtn = document.getElementById("register-btn");

formChangers.forEach((changer) => {
  changer.addEventListener("click", changeForm);
});

registerBtn.addEventListener("click", validateRegistration);

function changeForm() {
  if (loginForm.style.display === "none") {
    loginForm.style.display = "flex";
    registerForm.style.display = "none";
  } else {
    loginForm.style.display = "none";
    registerForm.style.display = "flex";
  }
  confirmPasswordError.textContent = "";
}

// Form validation

function validateRegistration() {
  confirmPasswordError.textContent = "";

  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordError.textContent = "Passwords do not match.";
    return false;
  }

  return true;
}
