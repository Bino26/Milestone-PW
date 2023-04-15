const firstPassword = document.getElementById("password");
const confirmPassword = document.getElementById("c-password");
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", () => {
  if (firstPassword.value === confirmPassword.value) {
    alert("Successfully login");
  } else {
    alert("Try again, Password didn't match");
  }
});
