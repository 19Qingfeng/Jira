import { useState } from "react";
import { Register } from "./register";
import { Login } from "./login";
import Logo from "../assets/logo.svg";
import Left from "../assets/left.svg";
import Right from "../assets/right.svg";
import { Card, Button, Divider } from "antd";
import styled from "@emotion/styled";

const UnAuthenticatedApp: React.FC = () => {
  const [isRegister, setRegister] = useState(false);

  const togglePage = () => {
    setRegister(!isRegister);
  };

  return (
    <Container>
      <Background />
      <Header />
      <ShadowCard>
        <Title>{isRegister ? "请注册" : "请登录"}</Title>
        {isRegister ? <Register /> : <Login />}
        <Divider></Divider>
        <LongButton type={"link"} onClick={togglePage}>
          切换到{isRegister ? "已经有账号了？直接登录" : "没有账号？注册新账号"}
        </LongButton>
      </ShadowCard>
    </Container>
  );
};

export const LongButton = styled(Button)`
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left bottom, right bottom;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem),
    calc(((100vw - 40rem) / 2) - 3.2rem), cover;
  background-image: url(${Left}), url(${Right});
`;

const Header = styled.header`
  background: url(${Logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;

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
