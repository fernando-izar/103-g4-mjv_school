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
}

export const ProductContext = createContext<IProductProviderData>(
  {} as IProductProviderData
);

export const ProductProvider = ({ children }: IProductProviderProps) => {
  const [productsList, setProductsList] = useState<IProducts[]>([]);
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
