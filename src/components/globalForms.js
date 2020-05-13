export const signUpForm = [
    {
      name: "name",
      type: "text",
      label: "Nome* ",
      pattern: "[A-Za-z çÇ]{3,}",
      title: "Mínimo 3 caracteres",
      placeholder: "Nome e Sobrenome",
    },
    {
      name: "email",
      type: "email",
      label: "Email* ",
      placeholder: "email@email.com",
    },
    {
      name: "cpf",
      type: "text",
      label: "CPF* ",
      placeholder: "000.000.000.00",
    },
    {
      name: "password",
      type: "password",
      title: "Mínimo 6 caracteres",
      label: "Senha* ",
      placeholder: "Mínimo de 6 caracteres",
    },
    {
      name: "confirmPassword",
      type: "password",
      title: "Mínimo 6 caracteres",
      label: "Confirmar* ",
      placeholder: "Confirme a senha anterior",
    },
  ];
  
  export const addressForm = [
    {
      name: "street",
      type: "text",
      label: "Logradouro* ",
      placeholder: "Rua / Av.",
      required: true,
    },
    {
      name: "number",
      type: "number",
      label: "Número* ",
      placeholder: "Número",
      required: true,
    },
    {
      name: "complement",
      type: "text",
      label: "Complemento ",
      placeholder: "Apto. / Bloco",
      required: false,
    },
    {
      name: "neighbourhood",
      type: "text",
      label: "Bairro* ",
      placeholder: "Bairro",
      required: true,
    },
    {
      name: "city",
      type: "text",
      label: "Cidade* ",
      placeholder: "Cidade",
      required: true,
    },
    {
      name: "state",
      type: "text",
      label: "Estado* ",
      placeholder: "Estado",
      required: true,
    },
  ];
  
  export const infoForm = [
    {
      name: "name",
      type: "text",
      label: "Nome* ",
      title: "Mínimo 3 caracteres",
      placeholder: "Nome e Sobrenome",
    },
    {
      name: "email",
      type: "email",
      label: "Email* ",
      placeholder: "email@email.com",
    },
    {
      name: "cpf",
      type: "text",
      label: "CPF* ",
      placeholder: "000.000.000-00",
    },
  ];
  
  export const loginForm = [
    {
      name: "email",
      type: "email",
      label: "Email* ",
      placeholder: "email@email.com",
    },
    {
      name: "password",
      type: "password",
      label: "Senha* ",
      placeholder: "Senha",
    },
  ];
  