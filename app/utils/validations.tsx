export const emailValidation = {
  pattern: {
    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
    message: "Formato de e-mail inválido"
  }
};

export const cpfValidation = {
  pattern: {
    // value: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
    // message: "Formato de CPF inválido"
  }
};