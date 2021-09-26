import * as auth from "../auth-provider";
import React, { useState } from "react";
import { UserProps } from "pages/project-list/search-panel";
import { http } from "pages/utils/http";
import { useMount } from "hooks/useMount";

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

export const AuthContext = React.createContext<AuthProviderProps | undefined>(
  undefined
);

const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    // 发送请求验证一下
    const responseData = await http("/me", {
      token,
    });
    user = (responseData as any).user;
  }
  return user;
};

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserProps | null>(null);

  const login = (info: UserLoginProps) => auth.login(info).then(setUser);

  const register = (info: UserLoginProps) => auth.register(info).then(setUser);

  const logout = () => auth.logout().then(() => setUser(null));

  useMount(() => {
    bootstrapUser().then(setUser);
  });

  return (
    <AuthContext.Provider
      value={{ login, register, logout, user }}
      children={children}
    />
  );
};

export { AuthProvider };
