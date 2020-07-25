import React, { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styled-components';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};
