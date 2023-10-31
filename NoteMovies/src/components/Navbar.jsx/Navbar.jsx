import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"
import { AppBarST, ButtonST, Logo, ModalST, ToolbarST } from "./styles/Navbar.styles"

import { useState } from "react"

const Navbar = () => {
  const [login, setLogin] = useState(false)
  const handleLogin = () => setLogin(!login)

  const [register, setRegister] = useState(false)
  const handleRegister = () => setRegister(!register)

  const [logged, setLogged] = useState(false)
  const handleLogged = () => setLogged(!logged)

  return (
    <>
      <AppBarST>
        <ToolbarST>
          <Logo src="./logo.png" />

          {logged ? (
            <ButtonST
              onClick={() => {
                sessionStorage.clear(), handleLogged()
              }}
            >
              {sessionStorage.getItem("username")}
            </ButtonST>
          ) : (
            <ButtonST onClick={handleLogin}>Entrar</ButtonST>
          )}
        </ToolbarST>
      </AppBarST>
      <ModalST open={login} onClose={handleLogin}>
        <LoginForm setLogin={handleLogin} setRegister={handleRegister} logged={handleLogged} />
      </ModalST>
      <ModalST open={register} onClose={handleRegister}>
        <RegisterForm setLogin={handleLogin} setRegister={handleRegister} />
      </ModalST>
    </>
  )
}

export default Navbar
