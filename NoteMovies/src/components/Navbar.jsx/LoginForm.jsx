/* eslint-disable react/prop-types */
import { ContainerST, FormButton, FormInput, LinkST, Text } from "./styles/Form.styles"

import axios from "axios"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { LoginUser } from "../../Models/User"

const LoginForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginUser) })

  const login = (data) => {
    axios({
      method: "post",
      url: "http://localhost:3333/user/login",
      data,
    }).then((res) => {
      sessionStorage.setItem("token", res.data.token)
      sessionStorage.setItem("username", res.data.profile.username)
      sessionStorage.setItem("streamings", res.data.profile.streamings)
      sessionStorage.setItem("categories", res.data.profile.categories)

      {
        props.logged()
        props.setLogin()
      }
    })
  }

  return (
    <ContainerST>
      <LinkST underline="none" onClick={(props.setLogin, props.setRegister)} sx={{ float: "right" }}>
        Registrar
      </LinkST>
      <Text sx={{ float: "left" }}>ENTRAR</Text>
      <form onSubmit={handleSubmit(login)}>
        <FormInput type="text" label="Email" size="small" variant="filled" error={!!errors.email?.message} helperText={errors.email?.message} {...register("email")} />
        <FormInput type="Password" label="Senha" size="small" variant="filled" error={!!errors.password?.message} helperText={errors.password?.message} {...register("password")} />
        <LinkST underline="none">Recuperar Senha</LinkST>
        <FormButton type="submit">Entrar</FormButton>
      </form>
    </ContainerST>
  )
}

export default LoginForm
