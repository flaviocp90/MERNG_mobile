module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "L'username non può essere vuoto";
  }
  if (email.trim() === "") {
    errors.email = "L'email non può essere vuota";
  } else {
    const regEx =
      /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = "Inserisci una mail valida";
    }
  }
  if (password.trim() === "") {
    errors.password = "Inserisci una password";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Le password devono essere uguali";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "L'username non può essere vuoto";
  }
  if (password.trim() === "") {
    errors.password = "La password non può essere vuota";
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
