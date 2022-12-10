import { AiOutlineSearch } from "react-icons/ai";
import { Container } from "./style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";

export const HeaderShoppingCart = () => {
  const { logout } = useContext(UserContext);

  return (
    <Container>
      <div className="search-box"></div>
      <button className="button-logout" onClick={logout}>
        Sair
      </button>
    </Container>
  );
};
