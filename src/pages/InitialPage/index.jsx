import { MainContainer } from "./style";
import { BackgroundColor } from "./style";
import { ContainerItens } from "./style";
import { ContainerText } from "./style";
import { Containerbutton } from "./style";

import {Button} from "../../components/Button/"
import mjvLogo from "../../assets/mjvLogo.svg"
import SplashImage from "../../assets/SplashImage.png"

export const InitialPage = () => {
  return (
    <BackgroundColor>
          <MainContainer>
            <img src={mjvLogo} alt='MjvLogo' className="Logo"/> 
            <ContainerItens>
              <ContainerText>

                <h1>MJV E-Commerce Market</h1>
                <h2>Aqui você encontra diversas opções de itens de <br></br> joalheria, hardware, roupas... Aproveite!</h2>
                <h3>“A promoções da Black Friday estão chegando!<br></br>  Economize aqui em nosso site!<br></br>  Não venha conhecer nossos produtos somente se não <br></br> quiser economizar dinheiro!”</h3>
             
              </ContainerText>
              <img src={SplashImage} alt='MjvLogo' />
              
            </ContainerItens>

            <Containerbutton>

              <Button label="Login" className="button" BackgroundColor="var(--color-primary-gradient)" linkTo="/login"> </Button>
              <Button label="Cadastrar" className="button" linkTo="/register"> </Button>

            </Containerbutton>
          </MainContainer>
    </BackgroundColor>

  );
};
