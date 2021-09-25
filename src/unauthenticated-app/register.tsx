import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Form, Input } from 'antd'
import { LongButton } from '.'


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
    <Form onFinish={handleSubmit}>
      <Form.Item>
        <Input type="text" id="password" />
      </Form.Item>
      <Form.Item>
        <Input type="text" id="password" />
      </Form.Item>
      <LongButton type="primary" htmlType="submit">注册</LongButton>
    </Form>
  );
};

export { Register };
