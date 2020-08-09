import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
import tw from 'twin.macro';
import signInBackgroundImg from '../../assets/sign-in-background.png';
import signUpBackgroundImg from '../../assets/sign-up-background.png';
import { Tooltip } from './tooltip.component';

export const Container = styled.div`
  ${tw`h-screen flex items-stretch`};
`;

export const Content = styled.div`
  ${tw`flex flex-col justify-center items-center w-full max-w-screen-md`};

  form {
    ${tw`my-16 flex flex-col w-64 text-center`};

    h1 {
      ${tw`mb-3 text-2xl`};
    }

    a {
      ${tw`block font-bold text-sm text-white hover:text-orange-500 mt-3 duration-300`};
    }
  }

  > a {
    ${tw`flex items-center hover:font-bold text-orange-500 duration-300`};
    svg {
      ${tw`mr-3`};
    }
  }
`;

interface BackgroundProps {
  isSignUpPage?: boolean;
}

export const Background = styled.div<BackgroundProps>`
  background: ${({ isSignUpPage }) =>
    isSignUpPage
      ? `url(${signUpBackgroundImg})`
      : `url(${signInBackgroundImg})`};
  ${tw`flex-1 bg-cover bg-no-repeat bg-center`};
`;

export const StyledButton = styled.button`
  ${tw`bg-transparent hover:bg-orange-500 text-gray-500 font-semibold
        hover:text-white py-2 px-4 border border-orange-500 rounded
        hover:border-transparent mt-6  duration-300`};
`;

interface StyledInputContainerProps {
  isFilled: boolean;
  isFocused: boolean;
  hasError: boolean;
}

export const StyledInputContainer = styled.div<StyledInputContainerProps>`
  ${tw`bg-gray-800 rounded-lg p-2 w-full mb-3 flex items-center`};
  ${({ hasError }) => hasError && tw`border border border-red-700`};
  ${({ isFocused }) => isFocused && tw`border border-orange-500 `};

  input {
    ${tw`placeholder-gray-500 bg-transparent flex-1`};
  }

  svg {
    ${tw`mr-5`}
    ${({ hasError }) => hasError && tw`text-red-700`};
    ${({ isFilled }) => isFilled && tw`text-orange-500`};
    ${({ isFocused }) => isFocused && tw`text-orange-500`};
  }
`;

export const TooltipContainer = styled.div`
  position: relative;

  span {
    width: 160px;
    background: #ff9000;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    &::before {
      content: '';
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;

export const ErrorContainer = styled(Tooltip)`
  ${tw`ml-2`}
  svg {
    ${tw`m-0`}
  }
  span {
    ${tw`bg-gray-900 text-white border border-red-700`}

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;

export const ToastStyledContainer = styled.div`
  ${tw`absolute right-0 top-0 overflow-hidden p-6`}
`;

interface ToastStyledProps {
  type?: 'info' | 'success' | 'error';
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: tw`bg-blue-200 text-blue-800`,
  success: tw`bg-green-200 text-green-800`,
  error: tw`bg-red-200 text-red-800`,
};

export const ToastStyled = styled(animated.div)<ToastStyledProps>`
  ${tw`relative w-64 py-4 pl-4 pr-8 shadow-2xl flex rounded-lg`}

  & + div {
    margin-top: 8px;
  }

  ${props => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;
    p {
      ${tw`mt-2 text-sm opacity-75 leading-5`}
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    color: inherit;
  }

  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;
      svg {
        margin-top: 0;
      }
    `}
`;
