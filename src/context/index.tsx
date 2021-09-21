import * as auth from "../auth-provider";
import React, { useState } from "react";
import { UserProps } from "pages/project-list/search-panel";
import { useContext } from "react";

interface UserLoginProps {
  username: string;
  password: string;
}

interface AuthProviderProps {
  login: (user: UserLoginProps) => Promise<void>;
  register: (user: UserLoginProps) => Promise<void>;
  logout: () => Promise<void>;
  user: UserProps | null;
}

const AuthContext = React.createContext<AuthProviderProps | undefined>(
  undefined
);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserProps | null>(null);

  const login = (info: UserLoginProps) =>
    auth.login(info).then((res) => setUser(res));

  const register = (info: UserLoginProps) => auth.register(info).then(setUser);

  const logout = () => auth.logout().then(() => setUser(null));

  return (
    <AuthContext.Provider
      value={{ login, register, logout, user }}
      children={children}
    />
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Auth Context must exist in AuthProvider!");
  }
  return { ...context };
};

export { useAuth, AuthProvider };
