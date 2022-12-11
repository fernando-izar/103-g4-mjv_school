import { ReactNode, useState, createContext, useEffect } from "react";
import { IUser } from "../interfaces/user.interfaces";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";
import { IResponseUserLogin, IUserLogin } from "../interfaces/login.interfaces";
import { IShoppingCart } from "../interfaces/shoppingcart.interfaces";
import {
  IUserRequest,
  IResponseUserRegister,
} from "../interfaces/user.interfaces";
import { toast } from "react-toastify";

interface IUserProviderProps {
  children: ReactNode;
}

interface IUserProviderData {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmitLogin: SubmitHandler<IUserLogin>;
  onSubmitRegister: SubmitHandler<IUserRequest>;
  user: IUser | null;
  users: IUser[];
  logout: () => void;
  userCarts: IShoppingCart[];
  setUserCarts: React.Dispatch<React.SetStateAction<IShoppingCart[]>>;
}

export const UserContext = createContext<IUserProviderData>(
  {} as IUserProviderData
);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [userCarts, setUserCarts] = useState<IShoppingCart[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await api.get<IUser[]>(`users`);

        console.log("users", data);

        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  useEffect(() => {
    const LoadUser = async () => {
      const token = localStorage.getItem("@TOKEN");
      const userId = localStorage.getItem("@USERID");

      if (token) {
        try {
          const userId = localStorage.getItem("@USERID");
          // api.defaults.headers.common.authorization = `Bearer ${token}`;

          const { data: responseUserData } = await api.get<IUser>(
            `users/${userId}`
          );

          setUser(responseUserData);
        } catch (error) {
          console.log(error);
        }
      }
      setLoading(false);
    };
    LoadUser();
  }, [loading]);

  const onSubmitLogin: SubmitHandler<IUserLogin> = async (data) => {
    try {
      const { data: responseData } = await api.post<IResponseUserLogin>(
        `auth/login`,
        data
      );

      api.defaults.headers.common.authorization = `Bearer ${responseData.token}`;

      localStorage.setItem("@TOKEN", responseData.token);

      const userLogged = users.find((user) => user.username == data.username);
      const userId = userLogged?.id!.toString();

      console.log("users", users);
      console.log("userId", userId);

      localStorage.setItem("@USERID", userId!);

      const { data: responseUserData } = await api.get<IUser>(
        `users/${userId}`
      );

      const { data: responseUserCartsData } = await api.get<IShoppingCart[]>(
        `carts/user/${userId}`
      );

      setUser(responseUserData);

      setUserCarts(responseUserCartsData);

      navigate("/dashboard", { replace: true });
      toast.success("Login efetuado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Usuário ou senha incorretos");
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  const onSubmitRegister: SubmitHandler<IUserRequest> = async (data) => {
    try {
      console.log("data", data);
      data.lat = "-23";
      data.long = "-46";
      const { data: responseData } = await api.post<IResponseUserRegister>(
        `users`,
        data
      );
      navigate("/login", { replace: true });
      toast.success("Cadastro efetuado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Cadastro não efetuado");
    }
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        onSubmitLogin,
        onSubmitRegister,
        user,
        users,
        logout,
        userCarts,
        setUserCarts,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
