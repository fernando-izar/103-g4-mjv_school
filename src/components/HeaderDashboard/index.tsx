import { AiOutlineSearch } from "react-icons/ai";
import { Container } from "./style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const HeaderDashboard = () => {
  const { logout } = useContext(UserContext);

  return (
    <Container>
      <div className="search-box">
        <input type="text" placeholder="search itens"></input>
        <div className="icon-outline-search">
          <AiOutlineSearch
            style={{
              position: "absolute",
              left: "601px",
              top: "12px",
              color: "black",
            }}
          />
        </div>
      </div>
      <button onClick={logout}>Sair</button>
    </Container>
  );
};
