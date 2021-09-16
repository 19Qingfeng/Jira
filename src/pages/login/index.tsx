import React from "react";

const baseUrl = process.env.REACT_APP_API_URL;

const Login: React.FC = () => {
  const login = (username: string, password: string) => {
    fetch(`${baseUrl}/register`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then(async (res) => {});
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    // HTMLFormElement.elements
    const elements = event.currentTarget.elements;
    const username = (elements[0] as HTMLInputElement).value;
    const password = (elements[1] as HTMLInputElement).value;
    login(username, password);
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

export { Login };
