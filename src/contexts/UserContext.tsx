import { ReactNode, useState, createContext, useEffect } from "react";
import { IUser } from "../interfaces/user.interfaces";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";

interface IUserProviderProps {
  children: ReactNode;
}

interface IUserProviderData {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext<IUserProviderData>(
  {} as IUserProviderData
);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const LoadUser = async () => {
      const token = localStorage.getItem("@TOKEN");

      if (token) {
        try {
          const userId = localStorage.getItem("@USERID");
          api.defaults.headers.common.authorization = `Bearer ${token}`;

          const { data } = await api.get<IUser>(`users/${userId}`);
          setUser(data);
        } catch (error) {
          console.log(error);
        }
      }
      setLoading(false);
    };
    LoadUser();
  }, [loading]);

  return (
    <UserContext.Provider value={{ loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};