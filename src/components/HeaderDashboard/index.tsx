import { AiOutlineSearch } from "react-icons/ai";
import { Container } from "./style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const HeaderDashboard = () => {
  const { logout } = useContext(UserContext);

  return (
    <Container>
      <div className="search-box">
        <form className="search-form">
          <input
            type="text"
            placeholder="Pesquise aqui pelo produto"
            className="search-field"
          ></input>
          <button className="search-button">
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
      <button className="button-logout" onClick={logout}>
        Sair
      </button>
    </Container>
  );
};
