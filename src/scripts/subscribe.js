const footerEmail = document.getElementById("footer-email");
const subscribe = document.getElementById("subscribe");

// toggles classes when input is invalid
const errorMessageFooter = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  //   inputControl.classList.remove("success");
};

// toggles classes when input is valid
const setSuccessFooter = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.textContent = "";
  //   inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

// regex to define email validity for footer email
const isValidFooterEmail = (footerEmail) => {
  const re = /^[A-Za-z0-9._-]+@[A-Za-z0-9-.]+\.[A-Za-z]{2,}$/;
  return re.test(String(footerEmail).toLowerCase());
};

// function evaluating the validation
const validateFooterInput = () => {
  const footerEmailValue = footerEmail.value;

  if (footerEmailValue === "") {
    errorMessageFooter(footerEmail, "Email is required");
  } else if (!isValidFooterEmail(footerEmailValue)) {
    errorMessageFooter(footerEmail, "Provide a valid email address");
  } else {
    setSuccessFooter(footerEmail, "Success");
  }
};

// footer form validation (subscribe)
subscribe.addEventListener("submit", (e) => {
  e.preventDefault();
  validateFooterInput();
});
