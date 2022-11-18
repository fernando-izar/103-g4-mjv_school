import { AiOutlineSearch } from "react-icons/ai";
import { Container } from "./style";

export const HeaderDashboard = () => {
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
              color: "#ffffff",
            }}
          />
        </div>
      </div>
    </Container>
  );
};
