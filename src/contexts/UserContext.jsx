import { useState, createContext } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  return (
    <UserContext.Provider value={{ loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};
