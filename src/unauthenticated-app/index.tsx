import { useState } from "react";
import { Register } from "./register";
import { Login } from "./login";

const UnAuthenticatedApp: React.FC = () => {
  const [isRegister, setRegister] = useState(false);

  const togglePage = () => {
    setRegister(!isRegister);
  };

  return (
    <div>
      {isRegister ? <Register /> : <Login />}
      <button onClick={togglePage}>切换到{isRegister ? "登录" : "注册"}</button>
    </div>
  );
};

export { UnAuthenticatedApp };
