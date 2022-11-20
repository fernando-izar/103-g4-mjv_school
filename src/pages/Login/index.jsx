import Input from '../../components/Input'
import { Main } from '../../styles/Main'
import mjvLogo from '../../assets/mjvLogo.png'
import { Button } from '../../components/Button'
import { Container } from './style'
export const Login = () => {
  return (
    <Main>
      <img src={mjvLogo} alt="MjvLogo" />
      <Container>
        <form>
          <fieldset>
            <p>Faça seu Login:</p>
            <Input type="email" label="Email" id="password" name="email" />
            <Input
              type="password"
              label="Senha"
              id="password"
              name="password"
            />

            <Button
              type="button"
              label="Login"
              className="button"
              BackgroundColor="var(--color-primary-gradient)"
            />
            {/* <button>Login</button> */}
            <a href="/register">Não é cadastrado ainda? Clique aqui.</a>
          </fieldset>
        </form>
      </Container>
    </Main>
  )
}
