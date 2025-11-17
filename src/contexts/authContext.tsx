import React, { createContext, useContext, useEffect, useState } from "react";
import { User } from '../types/apiSchema';



type authContextType = {
  User: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const Context = createContext<authContextType | null>(null);

function AuthContext({ children }: { children: React.ReactNode }) {
  const [User, setUser] = useState<User | null>(null);

  useEffect(() => {
    const strogePrfl = localStorage.getItem("User") 
    if(strogePrfl){
        const prf = JSON.parse(strogePrfl) as User;
        setUser(prf);
    }
  }, []);

  useEffect(() => {

    if (User) localStorage.setItem("User", JSON.stringify(User));
    else localStorage.removeItem("User");

  }, [User]);

  const data = {
    User,
    setUser,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
}

export const useAuth = () => useContext(Context);
export default AuthContext;
