import { Container } from "./style";

const Input = ({ id, label, type, name }) => {
  return (
    <Container>
      <input type={type} name={name} id={id} placeholder=" " />
      <label htmlFor={id}>{label}</label>
    </Container>
  );
};

export default Input;
