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
            <div className="imageContainer">
              <img src={image} alt={image} />
              <img src={image} alt={image} />
              <div className="blurDiv">________________________</div> {/*&nbsp;*/}
              <div className="imgReverse"> </div>
            </div>
            <div className="flip-card-front-title">
              <div>
                <p>{title}</p>
              </div>
            </div>
          </div>

          <div className="flip-card-back">
            <div className="flip-card-back-title">{title}</div>
            <div className="flip-card-back-price">${price}</div>
            {/* <div className="flip-card-back-description">{description}</div> */}
            <div className="flip-card-back-rate">Rate: {rating.rate}</div>
            <div className="flip-card-back-count">Count: {rating.count}</div>
            <div>{description}</div>
            <div>
              <Link to={`/dashboard/${id}`}>Description</Link>
            </div>
          </div>
        </div>

    </Container>
  );
};
