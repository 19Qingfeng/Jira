import { useContext } from "react";
import { AuthContext } from "../context";

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Auth Context must exist in AuthProvider!");
  }
  return { ...context };
};

export { useAuth };
