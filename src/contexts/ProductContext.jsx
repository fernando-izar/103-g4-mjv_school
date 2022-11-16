import { useEffect, useState, createContext } from "react";
import { api } from "../services/api";

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const { data } = await api.get(`products`);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadProducts();
  });

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
