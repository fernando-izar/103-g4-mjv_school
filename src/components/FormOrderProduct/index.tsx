import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { Container } from "./style";

export const FormOrderProduct = () => {
  const { productsListDB, addProductToCart } = useContext(ProductContext);
  const { id } = useParams();
  const date = new Date();
  const dateString = date.toString();
  const dateArray = dateString.split(" ");

  const product = productsListDB.filter(
    (element) => element.id.toString() == id
  );

  return (
    <Container>
      <h2 className="product-data">
        Data: {dateArray[2]}/{dateArray[1]}/{dateArray[3]}{" "}
      </h2>
      <img className="product-img" src={product[0].image} alt="product-img" />
      <p className="product-title">Produto: {product[0].title}</p>
      <input
        className="product-input-quantity"
        type="number"
        min={1}
        placeholder="quantidade"
        required
      />
      <button onClick={addProductToCart} className="product-button-add-cart">
        CONFIRMA
      </button>
    </Container>
  );
};
