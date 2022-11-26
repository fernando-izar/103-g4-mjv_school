import { ReactNode, useState, createContext } from "react";

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
  const [loading, setLoading] = useState(true);

  return (
    <UserContext.Provider value={{ loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};
