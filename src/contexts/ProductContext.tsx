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
  newSearch: string;
  setNewSearch: React.Dispatch<React.SetStateAction<string>>;
  searched: string;
  setSearched: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const ProductContext = createContext<IProductProviderData>(
  {} as IProductProviderData
);

export const ProductProvider = ({ children }: IProductProviderProps) => {
  const [productsList, setProductsList] = useState<IProducts[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [newSearch, setNewSearch] = useState("");
  const [searched, setSearched] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const { data } = await api.get<IProducts[]>(`products`);
        console.log("productsList", productsList);
        setProductsList(data);
      } catch (error) {
        console.log(error);
      }
      setLoadingProducts(false);
    };
    loadProducts();
  }, [loadingProducts]);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    const renderSearch = async () => {
      try {
        const { data } = await api.get<IProducts[]>(`products`);

        const filtered = data.filter(
          (element) =>
            element.category
              .toLowerCase()
              .includes(searched.toLowerCase().trim()) ||
            element.title
              .toLowerCase()
              .includes(searched.toLowerCase().trim()) ||
            element.description
              .toLowerCase()
              .includes(searched.toLowerCase().trim())
        );

        console.log("filtered", filtered);

        setProductsList(filtered);
      } catch (error) {
        console.log(error);
      }
    };
    if (token) {
      renderSearch();
    }
  }, [searched]);

  return (
    <ProductContext.Provider
      value={{
        productsList,
        loadingProducts,
        newSearch,
        setNewSearch,
        searched,
        setSearched,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
