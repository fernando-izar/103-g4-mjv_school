import { useParams } from "react-router-dom";
import { Container } from "./style";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { IProducts } from "../../interfaces/products.interfaces";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { ModalProduct } from "../../components/ModalProduct";

import MJVLoad from "../../assets/MJVLoad.gif";
import PageNotExist from "../../assets/PageNotExist.png";

import { HeaderDashboard } from "../../components/HeaderDashboard";
import { HeaderDescription } from "../../components/HeaderDescription";
import { AsideDashboard } from "../../components/AsideDashboard";
import { AsideDescription } from "../../components/AsideDescription";
import { Button } from "../../components/Button";
import { Main } from "../../styles/main";
import { FormOrderProduct } from "../../components/FormOrderProduct";

export const Description = () => {
  const { id } = useParams();
  const { isModalProduct, setIsModalProduct } = useContext(ProductContext);
  const [product, setProduct] = useState<IProducts | null>(null);
  const [loadingProduct, setLoadingProduct] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const { data } = await api.get(`products/${id}`);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
      setLoadingProduct(false);
    };
    loadProduct();
  }, [id]);

  if (loadingProduct) {
    return (
      <Container>
        <AsideDescription />

        <div className="main-content">
          <HeaderDescription />

          <div className="loadContainer">
            <img src={MJVLoad} alt="" />
          </div>
          <div className="bodyContainer"></div>
        </div>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container>
      <AsideDescription />
      <div className="main-content">
        <HeaderDescription />

        <div className="product-not-found">
        <h1>Produto não existe!</h1>
          <img className="dinos" src={PageNotExist} alt="" />

        <div className="button-container">
        <Button 
          label="Voltar para produtos"
          linkTo="/dashboard"
          BackgroundColor="grey"
          className="button"
          />
        </div>

          
          </div>
        <div className="bodyContainer"></div>
        
      </div>
    </Container>
    );
  }

  return (
    <Container>
      <AsideDescription />

      <div className="main-content">
        <HeaderDescription />
        <Link className="product-not-found-link" to="/dashboard">
          Voltar
        </Link>

        <div className="bodyContainer">
          <div className="descriptionContainer">
            <div className="cardProduct">
              <div className="imageContainer">
                <img src={product.image} alt="image" />
                <img src={product.image} alt="image" />
                <div className="blurDiv">_</div> {/*&nbsp;*/}
              </div>
            </div>

            <ol className="textContainer">
              <h1>{product.title}</h1>
              <hr></hr>
              <h3>Rate: {product.rating.rate}</h3>
              <hr></hr>
              <h2>{product.description}</h2>
            </ol>

            <div className="buyContainer">
              <div className="buyArea">
                <h3>{product.title}</h3>
                <h4>{product.description}</h4>
                <h4>Quantidade restante: {product.rating.count}</h4>
                <h4> Valor: ${product.price}</h4>
                {/* <div className="buttonContainer"> */}
                {/* <Button
                    label="COLOCAR NO CARRINHO"
                    className="button"
                    BackgroundColor="grey"
                    linkTo="/Dashboard"
                  ></Button> */}
                {/* </div> */}
                <button
                  className="buttonContainer"
                  onClick={() => setIsModalProduct(true)}
                >
                  COLOCAR NO CARRINHO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalProduct && (
        <ModalProduct>
          <FormOrderProduct />
        </ModalProduct>
      )}
    </Container>
  );
};
