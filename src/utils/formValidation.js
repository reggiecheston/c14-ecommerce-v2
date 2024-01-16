// formValidations.js

export const isValidEmail = (email) => {
  const re = /^[A-Za-z0-9._-]+@[A-Za-z0-9-.]+\.[A-Za-z]{2,}$/;
  return re.test(String(email).toLowerCase());
};

export const isValidPhone = (phone) => {
  const re = /^(\+?\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  return re.test(String(phone));
};

export const validateFooterEmail = (footerEmail) => {
  if (footerEmail.trim() === "") {
    return "Email is required";
  } else if (!isValidEmail(footerEmail)) {
    return "Provide a valid email address";
  }
  return "";
};
