import { useParams } from "react-router-dom";
import { Container } from "./style";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { IProducts } from "../../interfaces/products.interfaces";


import { HeaderDashboard } from "../../components/HeaderDashboard";
import { AsideDashboard } from "../../components/AsideDashboard";
import { Button } from "../../components/Button";

export const Description = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProducts | null>(null);
  const [loadingProduct, setLoadingProduct] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const { data } = await api.get(`products/${id}`);
        setProduct(data);
        console.log(data.image);
      } catch (error) {
        console.log(error);
      }
      setLoadingProduct(false);
    };
    loadProduct();
  }, [id]);

  if (loadingProduct) {
    return <Container>Loading</Container>;
  }

  if (!product) {
    return (
      <Container>
        Product not found
        <Link to="/dashboard">Voltar</Link>
      </Container>
    );
  }

  return (
    <Container>
      <AsideDashboard></AsideDashboard>
      
      <div className="main-content">
        <HeaderDashboard />
        <Link to="/dashboard">Voltar</Link>

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
            <h2>{product.title}</h2>
            <hr></hr>
            <div>Rate: {product.rating.rate}</div>
            <hr></hr>
            <p>{product.description}</p>
            <br></br>
            <p>{product.description}</p>
            <br></br>
            <p>{product.description}</p>
          </ol>


          <div className="buyContainer">
            <div className="buyArea">
              <h3>{product.title}</h3>
              <h4>{product.description}</h4>
              <h4>Quantidade restante: {product.rating.count}</h4>
              <h4> Valor: ${product.price}</h4>
              <div className="buttonContainer">
                <Button label="COMPRAR AGORA" className="button" BackgroundColor="black" linkTo="/Dashboard"></Button>
                <Button label="COLOCAR NO CARRINHO" className="button" BackgroundColor="grey" linkTo="/Dashboard"></Button>          
              </div>
            </div>
          </div>

          
        </div>
          
        </div>

        


      </div>

    </Container>



  );
};
