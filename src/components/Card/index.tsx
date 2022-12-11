import { Container } from "./style";
import { Link } from "react-router-dom";
import { IProducts } from "../../interfaces/products.interfaces";

export const Card = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: IProducts) => {
  return (
    <Container>

        <div className="flip-card-inner">
          <div className="flip-card-front">
          <div className="flip-card-front-title">
              <div className="title-product-text-container">
                <h2 >{title}</h2>
              </div>
            </div>
            <div className="imageContainer">
              <img src={image} alt={image} />
              <img src={image} alt={image} />
              <div className="blurDiv">________________________</div> {/*&nbsp;*/}
              <div className="imgReverse"> </div>
            </div>

          </div>

          <div className="flip-card-back">
            <div className="flip-card-back-category">{category}</div>
            <div className="flip-card-back-title">{title}</div>
            <div className="back-text-container">
              <div className="flip-card-back-price">${price}</div>
              <div className="flip-card-back-rate">Rate: {rating.rate}</div>
              <div className="flip-card-back-count">Count: {rating.count}</div>
            </div>
            <div className="descriptinContainer">
            <div className="description-text">Description</div>
            </div>
            
            <div className="flip-card-back-description">{description}</div>
            <div className="link-Container">
              <Link className="buttonSeller" to={`/dashboard/${id}`}>Comprar</Link>
            </div>
          </div>
        </div>

    </Container>
  );
};
