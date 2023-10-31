import { Button, Container, Link, TextField, Typography, styled } from "@mui/material"

export const ContainerST = styled(Container)`
  margin-top: 64px;
  background-color: #23232e;
  color: #fff;
  width: 350px;
  float: right;
  padding: 20px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`
export const LinkST = styled(Link)`
  cursor: pointer;
`
export const Text = styled(Typography)`
  text-align: center;
`
export const FormInput = styled(TextField)`
  background-color: #fff;
  width: 100%;
  margin-top: 20px;
  border-radius: 5px;
`
export const FormButton = styled(Button)`
  background-color: #282835;
  color: #fff;
  width: 50%;
  margin: auto;
  margin-top: 20px;
  display: block;
`
