import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { Container } from "./style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";

export const HeaderDescription = () => {
  const { logout } = useContext(UserContext);

  return (
    <Container>
      <div className="search-box"></div>
      <Link to={`/shoppingcart`}>
        <AiOutlineShoppingCart color="8600bb" size={25} cursor={"pointer"} />
      </Link>
      <button className="button-logout" onClick={logout}>
        Sair
      </button>
    </Container>
  );
};
