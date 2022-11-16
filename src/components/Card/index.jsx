import { Container } from "./style";

export const Card = ({
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
      <p>{title}</p>
      <img src={image} alt={title} />
    </Container>
  );
};
