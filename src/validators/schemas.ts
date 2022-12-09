import * as yup from "yup";

export const formLoginSchema = yup.object().shape({
  username: yup.string().required("Username obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

export const formRegisterSchema = yup.object().shape({
  username: yup.string().required("Username obrigatório"),
  email: yup.string().email().required("Email obrigatório"),
  password: yup.string().required("Senha obrigatória"),
  firstname: yup.string().required("Primeiro nome obrigatório"),
  lastname: yup.string().required("Último nome obrigatório"),
  city: yup.string().required("Cidade obrigatória"),
  street: yup.string().required("Nome da rua obrigatória"),
  number: yup.number().required("Número obrigatório"),
  zipcode: yup.string().required("CEP obrigatório"),
  lat: yup.string().required("Latitude obrigatória"),
  long: yup.string().required("Longitude obrigatória"),
  phone: yup.string().required("Número de telefone/celular obrigatório"),
});
