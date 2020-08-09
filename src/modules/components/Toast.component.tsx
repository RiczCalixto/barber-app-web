import React from 'react';
import {
  FiCheckCircle,
  FiAlertTriangle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';
import { useTransition } from 'react-spring';
import { ToastStyledContainer, ToastStyled } from './styled-components';
import { ToastMessagesState } from '../../model/toast-context.model';
import { useToast } from '../../hooks/toast-context';

interface ToastContainerProps {
  messages: ToastMessagesState[];
}

interface ToastProps {
  toast: ToastMessagesState;
  style: object;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertTriangle size={24} />,
  success: <FiCheckCircle size={24} />,
};

export const Toast: React.FC<ToastProps> = ({ toast, style }) => {
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
    <ToastStyled hasDescription={!!description} type={type} style={style}>
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

export const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransition = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <ToastStyledContainer>
      {messagesWithTransition.map(({ item, key, props }) => (
        <Toast key={key} toast={item} style={props} />
      ))}
    </ToastStyledContainer>
  );
};
