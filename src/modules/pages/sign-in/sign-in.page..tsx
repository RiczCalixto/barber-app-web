import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core/typings/types';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import * as Yup from 'yup';
import {
  getValidationErrors,
  signInFormValidation,
} from '../../components/validation/form-validation';
import {
  Background,
  Container,
  Content,
} from '../../components/styled-components';
import { useAuth } from '../../../hooks/auth-context';
import { Button } from '../../components/Button.component';
import { Input } from '../../components/Input.component';
import appLogo from '../../../assets/logo.svg';
import { SignInData } from '../../../model/auth-context.model';
import { useToast } from '../../../hooks/toast-context';

export const SignInPage: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { user, signIn } = useAuth();
  const { addToast, removeToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInData): Promise<void> => {
      try {
        formRef.current?.setErrors({});
        await signInFormValidation(data);
        await signIn({ email: data.email, password: data.password });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          formRef.current?.setErrors(getValidationErrors(error));
        }
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
        });
      }
    },

    [signIn, addToast],
  );

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
