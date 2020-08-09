import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import {
  Content,
  Container,
  Background,
} from '../../components/styled-components';
import appLogo from '../../../assets/logo.svg';
import { Button } from '../../components/Button.component';
import { Input } from '../../components/Input.component';
import { SignUpData } from '../../../model/auth-context.model';
import {
  signUpFormValidation,
  getValidationErrors,
} from '../../components/validation/form-validation';
import { api } from '../../../services/api';
import { useToast } from '../../../hooks/toast-context';

export const SignUpPage: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const handleSubmit = useCallback(
    async (data: SignUpData): Promise<void> => {
      try {
        formRef.current?.setErrors({});

        await signUpFormValidation(data);
        await api.post('users', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro efetuado com sucesso!',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          formRef.current?.setErrors(getValidationErrors(error));
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Background isSignUpPage />
      <Content>
        <img src={appLogo} alt="Barber App" />
        <Form ref={formRef} onSubmit={handleSubmit}>
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
        <Link to="/">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </Content>
    </Container>
  );
};
