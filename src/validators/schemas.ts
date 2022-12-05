import * as yup from "yup";

export const formLoginSchema = yup.object().shape({
  username: yup.string().required("Username obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});
