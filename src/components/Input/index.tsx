import { Container } from "./style";

export interface IInputProps {
  id: string;
  label: string;
  type: string;
  name: string;
}

const Input = ({ id, label, type, name }: IInputProps) => {
  return (
    <Container>
      <input type={type} name={name} id={id} placeholder=" " />
      <label htmlFor={id}>{label}</label>
    </Container>
  );
};

export default Input;
