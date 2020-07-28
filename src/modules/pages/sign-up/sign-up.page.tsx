import React, { useCallback, useRef, MutableRefObject } from 'react';
import {
  Content,
  Container,
  Background,
} from '../../components/styled-components';
import appLogo from '../../../assets/logo.svg';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Button } from '../../components/Button.component';
import { Input } from '../../components/Input.component';
import { Form } from '@unform/web';
import { SignUpData } from '../../../model/forms.model';
import {
  signUpFormValidation,
  getValidationErrors,
} from '../../components/validation/form-validation';
import { FormHandles } from '@unform/core';

export const SignUpPage: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: SignUpData): Promise<void> => {
    try {
      formRef.current?.setErrors({});
      await signUpFormValidation(data);
    } catch (error) {
      formRef.current?.setErrors(getValidationErrors(error));
    }
  }, []);

  return (
    <Container>
      <Background isSignUpPage={true} />
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
        <a href="http://">
          <FiArrowLeft />
          Voltar para o login
        </a>
      </Content>
    </Container>
  );
};
