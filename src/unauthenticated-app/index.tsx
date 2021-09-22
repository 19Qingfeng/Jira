import { useState } from "react";
import { Register } from "./register";
import { Login } from "./login";
import { Card, Button } from "antd";
import styled from "@emotion/styled";

const UnAuthenticatedApp: React.FC = () => {
  const [isRegister, setRegister] = useState(false);

  const togglePage = () => {
    setRegister(!isRegister);
  };

  return (
    <Container>
      <ShadowCard>
        {isRegister ? <Register /> : <Login />}
        <Button onClick={togglePage}>
          切换到{isRegister ? "登录" : "注册"}
        </Button>
      </ShadowCard>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;

export { UnAuthenticatedApp };
