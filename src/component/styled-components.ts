import styled from 'styled-components';
import tw from 'twin.macro';
import signInBackgroundImg from '../assets/sign-in-background.png';
import signUpBackgroundImg from '../assets/sign-up-background.png';

export const Container = styled.div`
  ${tw`h-screen flex items-stretch`}
`;

export const Content = styled.div`
  ${tw`flex flex-col justify-center items-center w-full max-w-screen-md`}

  form {
    ${tw`my-16 flex flex-col w-64 text-center`}

    h1 {
      ${tw`mb-3 text-2xl`}
    }

    a {
      ${tw`block font-bold text-sm text-white hover:text-orange-500 mt-3 duration-300`}
    }
  }

  > a {
    ${tw`flex items-center hover:font-bold text-orange-500 duration-300`}
    svg {
      ${tw`mr-3`}
    }
  }
`;

interface BackgroundProps {
  isSignUpPage?: boolean;
}

export const Background = styled.div`
  background: ${(props: BackgroundProps) =>
    props.isSignUpPage
      ? `url(${signUpBackgroundImg})`
      : `url(${signInBackgroundImg})`};
  ${tw`flex-1 bg-cover bg-no-repeat bg-center`};
`;

export const StyledButton = styled.button`
  ${tw`bg-transparent hover:bg-orange-500 text-gray-500 font-semibold
        hover:text-white py-2 px-4 border border-orange-500 rounded
        hover:border-transparent mt-6  duration-300`}
`;

export const StyledInputContainer = styled.div`
  ${tw`bg-gray-800 rounded-lg p-2 w-full mb-3 flex items-center`}

  input {
    ${tw`placeholder-gray-500 bg-transparent flex-1`}
  }

  svg {
    ${tw`mr-5`}
  }
`;
