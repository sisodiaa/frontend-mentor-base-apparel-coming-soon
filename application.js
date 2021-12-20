document.addEventListener("DOMContentLoaded", () => {
  const emailField = document.querySelector(".landing-page__email");
  const errorIcon = document.querySelector(".landing-page__error-icon");
  const errorText = document.querySelector(".landing-page__error-text");

  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const email = emailField.value;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      errorIcon.style.display = "block";
      errorText.style.display = "block";
      emailField.style.borderColor = "hsl(0, 93%, 68%)";
    }
  })

  emailField.addEventListener("input", () => {
    if (errorIcon.style.display == "block") {
      errorIcon.style.display = "none";
      errorText.style.display = "none";
      emailField.style.borderColor = "hsl(0, 36%, 70%)";
    }
  })
})
