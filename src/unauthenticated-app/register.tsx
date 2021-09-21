import React from "react";
import { useAuth } from "../hooks/useAuth";


const Register: React.FC = () => {
  const auth = useAuth();

  const register = (username: string, password: string) =>
    auth.register({
      username,
      password,
    });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    // HTMLFormElement.elements
    const elements = event.currentTarget.elements;
    const username = (elements[0] as HTMLInputElement).value;
    const password = (elements[1] as HTMLInputElement).value;
    register(username, password);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="text" id="password" />
      </div>
      <button type="submit">注册</button>
    </form>
  );
};

export { Register };
