import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { StyledInputContainer } from './styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  return (
    <StyledInputContainer>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </StyledInputContainer>
  );
};
