import { useParams } from "react-router-dom";
import { Container } from "./style";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export const Description = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
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
      <div>
        <img src={product.image} alt="image" />
      </div>
      <div>${product.price}</div>
      <div>{product.description}</div>
      <div>Rate: {product.rating.rate}</div>
      <div>Count: {product.rating.count}</div>
      <Link to="/dashboard">Voltar</Link>
    </Container>
  );
};
