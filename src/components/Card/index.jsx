import { Container } from "./style";
import { Link } from "react-router-dom";

export const Card = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rate,
  count,
}) => {
  return (
    <Container>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt={image} />
          <div className="flip-card-front-title">
            <div>
              <p>{category}</p>
            </div>
          </div>
        </div>

        <div className="flip-card-back">
          <div className="flip-card-back-title">{title}</div>
          <div className="flip-card-back-price">${price}</div>
          {/* <div className="flip-card-back-description">{description}</div> */}
          <div className="flip-card-back-rate">Rate: {rate}</div>
          <div className="flip-card-back-count">Count: {count}</div>
          <div>{description}</div>
          <div>
            <Link to={`/dashboard/${id}`}>Description</Link>
          </div>
        </div>
      </div>
    </Container>
  );
};
