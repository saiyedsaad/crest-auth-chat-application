const loginValidation = (values) => {
  const errors = {};

  // Validation for E-mail
  if (!values.email) {
    errors.email = "Input Required!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  // Validation for Password
  if (!values.password) {
    errors.password = "Input Required!";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Must be greater than 8 or less than 20 characters long.";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password";
  }
  return errors;
};

export const registerValidation = (values) => {
  const errors = {};

  // Validation for Username
  if (!values.username) {
    errors.username = "Input Required!";
  }
  // Validation for E-Mail
  if (!values.email) {
    errors.email = "Input Required!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid Email Address!";
  }
  // Validation for Password
  if (!values.password) {
    errors.password = "Input Required!";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Must be greater than 8 or less than 20 characters long.";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password!";
  }
  // Validation for Confirm password
  if (!values.cpassword) {
    errors.cpassword = "Input Required!";
  } else if (values.password !== values.cpassword) {
    errors.cpassword = "Passwords don't match!";
  } else if (values.cpassword.includes(" ")) {
    errors.cpassword = "Invalid Password Entry!";
  }

  return errors;
};

export default loginValidation;
