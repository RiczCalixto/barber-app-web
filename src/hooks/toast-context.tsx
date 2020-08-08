import * as React from 'react';
import { v4 } from 'uuid';
import {
  ToastContextInterface,
  ToastMessagesState,
  AddToastMessageObj,
} from '../model/toast-context.model';
import { ToastContainer } from '../modules/components/Toast.component';

const ToastContext = React.createContext({} as ToastContextInterface);

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = React.useState<ToastMessagesState[]>([]);

  const addToast = (message: AddToastMessageObj) => {
    const id = v4();
    const { type, description, title } = message;

    const newToastMessage = {
      id,
      type,
      description,
      title,
    };

    setMessages(prevMessages => [...prevMessages, newToastMessage]);
  };

  const removeToast = (id: string) =>
    setMessages(messages.filter(message => message.id !== id));

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastContainer messages={messages} />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextInterface => {
  const context = React.useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within an ToastProvider');
  }

  return context;
};
