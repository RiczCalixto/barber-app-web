import React from 'react';
import {
  Content,
  Container,
  Background,
} from '../../component/styled-components';
import appLogo from '../../assets/logo.svg';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { Button } from '../../component/Button.component';
import { Input } from '../../component/Input.component';
import { Form } from '@unform/web';

export const SignInPage: React.FC = () => {
  const handleSubmit = (data: object): void => console.log(data);

  return (
    <Container>
      <Content>
        <img src={appLogo} alt="Barber App" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu Login</h1>
          <Input name="email" placeholder="E-mail" type="email" icon={FiMail} />
          <Input
            name="password"
            placeholder="Senha"
            type="password"
            icon={FiLock}
          />
          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </Form>
        <a href="http://">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};
