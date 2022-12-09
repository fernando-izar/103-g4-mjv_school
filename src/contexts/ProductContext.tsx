import {
  ReactNode,
  useEffect,
  useState,
  createContext,
  useContext,
} from "react";
import { UserContext } from "./UserContext";
import { api } from "../services/api";
import { IProducts } from "../interfaces/products.interfaces";

interface IProductProviderProps {
  children: ReactNode;
}

interface IProductProviderData {
  productsList: IProducts[];
  loadingProducts: boolean;
}

export const ProductContext = createContext<IProductProviderData>(
  {} as IProductProviderData
);

export const ProductProvider = ({ children }: IProductProviderProps) => {
  const [productsList, setProductsList] = useState<IProducts[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const { data } = await api.get(`products?limit=20`);
        console.log("productsList", productsList);
        setProductsList(data);
      } catch (error) {
        console.log(error);
      }
      setLoadingProducts(false);
    };
    loadProducts();
  }, [loadingProducts]);

  return (
    <ProductContext.Provider
      value={{
        productsList,
        loadingProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
