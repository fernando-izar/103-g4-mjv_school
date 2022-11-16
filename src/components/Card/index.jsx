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
      <img src={image} alt={title} />
    </Container>
  );
};
