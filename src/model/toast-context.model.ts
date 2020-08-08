export interface ToastContextInterface {
  addToast(message: AddToastMessageObj): void;
  removeToast(id: string): void;
}

export interface ToastMessagesState {
  id: string;
  type?: ToastType;
  title: string;
  description?: string;
}

export type ToastType = 'success' | 'error' | 'info';

export type AddToastMessageObj = Omit<ToastMessagesState, 'id'>;
