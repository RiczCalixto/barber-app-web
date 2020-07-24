import React from 'react';
import {
  Content,
  Container,
  Background,
} from '../../styled-components/components';
import appLogo from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';

export const SignupPage: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={appLogo} alt="Barber App" />
        <form>
          <h1>Faça seu Login</h1>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
          <a href="forgot">Esqueci minha senha</a>
        </form>
        <a href="http://">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};
