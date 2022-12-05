import { ReactNode, useState, createContext, useEffect } from "react";
import { IUser } from "../interfaces/user.interfaces";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";
import { IResponseUserLogin, IUserLogin } from "../interfaces/login.interfaces";

interface IUserProviderProps {
  children: ReactNode;
}

interface IUserProviderData {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmitLogin: SubmitHandler<IUserLogin>;
  user: IUser | null;
  logout: () => void;
}

export const UserContext = createContext<IUserProviderData>(
  {} as IUserProviderData
);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await api.get<IUser[]>(`users`);

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

          console.log("loading", loading);

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

      localStorage.setItem("@USERID", userId!);

      const { data: responseUserData } = await api.get<IUser>(
        `users/${userId}`
      );

      setUser(responseUserData);

      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  return (
    <UserContext.Provider
      value={{ loading, setLoading, onSubmitLogin, user, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
