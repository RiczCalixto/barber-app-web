import React from 'react';
import {
  FiCheckCircle,
  FiAlertTriangle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';
import { ToastStyledContainer, ToastStyled } from './styled-components';
import { ToastMessagesState } from '../../model/toast-context.model';
import { useToast } from '../../hooks/toast-context';

interface ToastContainerProps {
  messages: ToastMessagesState[];
}

interface ToastProps {
  toast: ToastMessagesState;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertTriangle size={24} />,
  success: <FiCheckCircle size={24} />,
};

export const Toast: React.FC<ToastProps> = ({ toast }) => {
  const { removeToast } = useToast();
  const { description, title, id, type } = toast;

  React.useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 3000);

    return () => clearTimeout(timer);
  }, [removeToast, id]);

  const handleRemoveToast = (toastId: string) => () => {
    removeToast(toastId);
  };

  return (
    <ToastStyled hasDescription={!!description} type={type}>
      {icons[type || 'info']}
      <div>
        <strong>{title}</strong>
        {description && <p>{description}</p>}
      </div>
      <button type="button" onClick={handleRemoveToast(id)}>
        <FiXCircle size={18} />
      </button>
    </ToastStyled>
  );
};

export const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => (
  <ToastStyledContainer>
    {messages.map(message => (
      <Toast key={message.id} toast={message} />
    ))}
  </ToastStyledContainer>
);
