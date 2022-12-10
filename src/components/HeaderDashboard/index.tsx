import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { Container } from "./style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ProductContext } from "../../contexts/ProductContext";
import { Link } from "react-router-dom";

export const HeaderDashboard = () => {
  const { logout } = useContext(UserContext);
  const { newSearch, setNewSearch, searched, setSearched } =
    useContext(ProductContext);

  function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearched(newSearch);
    console.log("newSearch", newSearch);
    console.log("searched", searched);
  }

  return (
    <Container>
      <div className="search-box">
        <form onSubmit={onSubmitHandler} className="search-form">
          <input
            type="text"
            placeholder="Pesquise aqui pelo produto"
            className="search-field"
            onChange={(event) => setNewSearch(event.target.value)}
          ></input>
          <button
            onClick={() => setSearched(newSearch)}
            className="search-button"
          >
            <AiOutlineSearch
              style={{
                position: "absolute",
                left: "393px",
                top: "12px",
                color: "black",
                width: "20px",
                height: "20px",
                objectFit: "cover",
              }}
            />
          </button>
        </form>
      </div>
      <Link to={`/shoppingcart`}>
        <AiOutlineShoppingCart color="white" size={25} cursor={"pointer"} />
      </Link>
      <button className="button-logout" onClick={logout}>
        Sair
      </button>
    </Container>
  );
};
