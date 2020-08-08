import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { ToastContainer, ToastStyled } from './styled-components';

export const Toast: React.FC = () => {
  return (
    <ToastContainer>
      <ToastStyled hasDescription>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </ToastStyled>

      <ToastStyled type="error" hasDescription>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </ToastStyled>

      <ToastStyled type="success" hasDescription={false}>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </ToastStyled>
    </ToastContainer>
  );
};
