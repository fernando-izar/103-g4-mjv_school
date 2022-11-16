import Routes from "./routes";
import { ProductProvider } from "./contexts/ProductContext";

function App() {
  return (
    <>
      <ProductProvider>
        <Routes />
      </ProductProvider>
    </>
  );
}

export default App;
