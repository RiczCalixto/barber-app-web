import React from 'react';
import {
  Content,
  Container,
  Background,
} from '../../component/styled-components';
import appLogo from '../../assets/logo.svg';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Button } from '../../component/Button.component';
import { Input } from '../../component/Input.component';
import { Form } from '@unform/web';

export const SignUpPage: React.FC = () => {
  const handleSubmit = (data: object): void => console.log(data);
  return (
    <Container>
      <Background isSignUpPage={true} />
      <Content>
        <img src={appLogo} alt="Barber App" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input name="name" placeholder="Nome" type="text" icon={FiUser} />
          <Input name="email" placeholder="E-mail" type="email" icon={FiMail} />
          <Input
            name="password"
            placeholder="Senha"
            type="password"
            icon={FiLock}
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="http://">
          <FiArrowLeft />
          Voltar para o login
        </a>
      </Content>
    </Container>
  );
};
