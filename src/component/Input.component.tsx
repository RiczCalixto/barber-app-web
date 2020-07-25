import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { StyledInputContainer } from './styled-components';
import { useField } from '@unform/core';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const { registerField, defaultValue, error, fieldName } = useField(name);
  const inputRef = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <StyledInputContainer>
      {Icon && <Icon size={20} />}
      <input defaultValue={defaultValue} ref={inputRef} {...rest} />
    </StyledInputContainer>
  );
};
