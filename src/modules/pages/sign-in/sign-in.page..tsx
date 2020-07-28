import React, { useCallback, useRef } from 'react';
import {
  Content,
  Container,
  Background,
} from '../../components/styled-components';
import appLogo from '../../../assets/logo.svg';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { Button } from '../../components/Button.component';
import { Input } from '../../components/Input.component';
import { Form } from '@unform/web';
import { SignInData } from '../../../model/forms.model';
import {
  signInFormValidation,
  getValidationErrors,
} from '../../components/validation/form-validation';
import { FormHandles } from '@unform/core/typings/types';

export const SignInPage: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: SignInData): Promise<void> => {
    try {
      await signInFormValidation(data);
    } catch (error) {
      formRef.current?.setErrors(getValidationErrors(error));
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={appLogo} alt="Barber App" />
        <Form ref={formRef} onSubmit={handleSubmit}>
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
