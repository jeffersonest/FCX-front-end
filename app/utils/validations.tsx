export const emailValidation = {
  required: "E-mail é obrigatório",
  pattern: {
    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
    message: "Formato de e-mail inválido"
  }
};

export const cpfValidation = {
  required: "CPF é obrigatório",
  pattern: {
    value: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
    message: "Formato de CPF inválido"
  }
};