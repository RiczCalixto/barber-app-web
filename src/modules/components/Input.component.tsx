import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';
import { StyledInputContainer, ErrorContainer } from './styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const { registerField, defaultValue, error, fieldName } = useField(name);
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setFocus(false);
    if (inputRef.current?.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, []);
  return (
    <StyledInputContainer
      hasError={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
    >
      {Icon && <Icon size={20} />}
      <input
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        {...rest}
      />
      {error && (
        <ErrorContainer title={error}>
          <FiAlertCircle size={20} />
        </ErrorContainer>
      )}
    </StyledInputContainer>
  );
};
