import { useState } from "react";
import { Register } from "./register";
import { Login } from "./login";
import { Card, Button } from "antd";

const UnAuthenticatedApp: React.FC = () => {
  const [isRegister, setRegister] = useState(false);

  const togglePage = () => {
    setRegister(!isRegister);
  };

  return (
    <div style={{ display: "flex", justifyContent: 'center' }}>
      <Card>
        {isRegister ? <Register /> : <Login />}
        <Button onClick={togglePage}>切换到{isRegister ? "登录" : "注册"}</Button>
      </Card>
    </div>
  );
};

export { UnAuthenticatedApp };
