import * as yup from "yup"

export const LoginUser = yup.object({
  email: yup.string().email("Email invalido").required("Email obrigatorio"),
  password: yup.string().required("Senha obrigatorio").min(8, "minimo 8 digitos"),
})

export const RegisterUser = yup.object({
  name: yup.string().required("Nome obrigatorio").min(4, "minimo 4 digitos"),
  email: yup.string().required("Email obrigatorio").email("Email invalido"),
  password: yup.string().required("Senha obrigatorio").min(8, "minimo 8 digitos"),
})
