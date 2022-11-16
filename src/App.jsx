import Routes from "./routes";
import { UserProvider } from "./contexts/UserContext";
import { ProductProvider } from "./contexts/ProductContext";

function App() {
  return (
    <>
      <UserProvider>
        <ProductProvider>
          <Routes />
        </ProductProvider>
      </UserProvider>
    </>
  );
}

export default App;
