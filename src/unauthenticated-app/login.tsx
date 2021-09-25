import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Form, Input } from "antd";
import { LongButton } from ".";

const Login: React.FC = () => {
  const auth = useAuth();

  // const login = (username: string, password: string) =>
  //   auth.login({
  //     username,
  //     password,
  //   });

  // 源生
  // const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
  //   // HTMLFormElement.elements
  //   const elements = event.currentTarget.elements;
  //   const username = (elements[0] as HTMLInputElement).value;
  //   const password = (elements[1] as HTMLInputElement).value;
  //   login(username, password);
  //   event.preventDefault();
  // };

  // antd
  const handleSubmit = (values: { username: string; password: string }) => {
    auth.login(values);
  };
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder="用户名" type="text" id={"username"} />
      </Form.Item>
      <Form.Item name={"password"}>
        <Input placeholder="密码" type="text" id="password" />
      </Form.Item>
      <Form.Item>
        <LongButton type="primary" htmlType="submit">
          登录
        </LongButton>
      </Form.Item>
    </Form>
  );
};

export { Login };
