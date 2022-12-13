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
import { IShoppingCart } from "../interfaces/shoppingcart.interfaces";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
  productsListDB: IProducts[];
  isModalProduct: boolean;
  setIsModalProduct: React.Dispatch<React.SetStateAction<boolean>>;
  addProductToCart: () => void;
}

export const ProductContext = createContext<IProductProviderData>(
  {} as IProductProviderData
);

export const ProductProvider = ({ children }: IProductProviderProps) => {
  const [productsList, setProductsList] = useState<IProducts[]>([]);
  const [productsListDB, setProductsListDB] = useState<IProducts[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [newSearch, setNewSearch] = useState("");
  const [searched, setSearched] = useState("");
  const [category, setCategory] = useState("all");
  const [isModalProduct, setIsModalProduct] = useState(false);

  const navigate = useNavigate();

  const addProductToCart = () => {
    setIsModalProduct(false);
    navigate("/shoppingcart", { replace: true });
    toast.success("Produto adicionado com sucesso!");
  };

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    const loadProducts = async () => {
      try {
        const { data } = await api.get<IProducts[]>(`products`);

        console.log("get->products", data);

        setProductsList(data);
        setProductsListDB(data);
      } catch (error) {
        console.log(error);
      }
      setLoadingProducts(false);
    };

    const LoadProductsByCategory = async () => {
      try {
        const { data } = await api.get<IProducts[]>(
          `products/category/${category}`
        );
        console.log("get->products/category/:category", data);
        setProductsList(data);
      } catch (error) {
        console.log(error);
      }
      setLoadingProducts(false);
    };

    if (category == "all") {
      loadProducts();
    }

    if (
      category == "electronics" ||
      category == "jewelery" ||
      category == "men's clothing" ||
      category == "women's clothing"
    ) {
      LoadProductsByCategory();
    }
  }, [loadingProducts, category]);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    const renderSearch = async () => {
      try {
        const { data } = await api.get<IProducts[]>(`products`);

        console.log("get->products", data);

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
    if (token && searched.length) {
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
        category,
        setCategory,
        productsListDB,
        isModalProduct,
        setIsModalProduct,
        addProductToCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
