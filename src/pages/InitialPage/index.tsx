import { MainContainer } from "./style";
import { BackgroundColor } from "./style";
import { ContainerItens } from "./style";
import { ContainerText } from "./style";
import { Containerbutton } from "./style";
import { Main } from "../../styles/main";


import { Button } from "../../components/Button";
import mjvLogo from "../../assets/MjvColor.svg";

export const InitialPage = () => {
  return (
    <Main>
      <MainContainer>
        <img src={mjvLogo} alt="MjvLogo" className="Logo" />
        <ContainerItens>
          <ContainerText>
            <h1>MJV E-Commerce Market</h1>
            <h2>
              Transformando sua experiencia em compras de<br></br>{" "}
              joalheria, hardware, roupas
            </h2>
            <h3>
              Somos ágeis na nossa entrega!<br></br>
              <br></br> 
              Não venha conhecer nossos produtos
              somente se não <br></br> quiser economizar
            </h3>
          </ContainerText>
        </ContainerItens>

        <Containerbutton>
          <Button
            label="Login"
            className="button"
            BackgroundColor="var(--color-secondary)"
            linkTo="/login"
          ></Button>
        </Containerbutton>
      </MainContainer>
    </Main>
  );
};
