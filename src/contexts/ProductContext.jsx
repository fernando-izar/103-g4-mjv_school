import { useEffect, useState, createContext, useContext } from "react";
import { UserContext } from "./UserContext";
import { api } from "../services/api";

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);
  const { loading, setLoading } = useContext(UserContext);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const { data } = await api.get(`products?limit=20`);
        setProductsList(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    loadProducts();
  }, [loading]);

  return (
    <ProductContext.Provider
      value={{
        productsList,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
