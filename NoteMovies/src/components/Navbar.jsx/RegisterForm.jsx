/* eslint-disable react/prop-types */
import { ContainerST, FormButton, FormInput, LinkST, Text } from "./styles/Form.styles"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { RegisterUser } from "../../Models/User"
import axios from "axios"

const RegisterForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(RegisterUser) })

  const Register = (data) => {
    axios({
      method: "post",
      url: "http://localhost:3333/user/register",
      data,
    }).then(() => {
      props.setRegister()
    })
  }

  return (
    <ContainerST>
      <LinkST underline="none" sx={{ float: "left" }} onClick={(props.setLogin, props.setRegister)}>
        Entrar
      </LinkST>
      <Text sx={{ float: "right" }}>REGISTRAR</Text>
      <form onSubmit={handleSubmit(Register)}>
        <FormInput type="text" label="Nome" size="small" variant="filled" error={!!errors.name?.message} helperText={errors.name?.message} {...register("name")} />
        <FormInput type="text" label="Email" size="small" variant="filled" error={!!errors.email?.message} helperText={errors.email?.message} {...register("email")} />
        <FormInput type="Password" label="Senha" size="small" variant="filled" error={!!errors.password?.message} helperText={errors.password?.message} {...register("password")} />
        <FormButton type="submit">REGISTRAR</FormButton>
      </form>
    </ContainerST>
  )
}

export default RegisterForm
