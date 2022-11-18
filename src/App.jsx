import Routes from "./routes";
import { UserProvider } from "./contexts/UserContext";
import { ProductProvider } from "./contexts/ProductContext";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <UserProvider>
        <ProductProvider>
          <GlobalStyle />
          <Routes />
        </ProductProvider>
      </UserProvider>
    </>
  );
}

export default App;
