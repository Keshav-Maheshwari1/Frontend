// context/AuthContext.js
"use client";

import { useCurrentUser } from "@/costomeHooks/useAuth";
import { createContext, useContext} from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { data: authData, isLoading, refetch } = useCurrentUser();
  
  return (
    <AuthContext.Provider value={{ authData, setAuthData: refetch, loading: isLoading }}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
