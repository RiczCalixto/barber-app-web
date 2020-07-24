import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

export const GlobalStyle = createGlobalStyle`
  * {
    ${tw`m-0 p-0 box-border outline-none`}
  }
  body{
    ${tw`bg-gray-900 text-white antialiased`}
  }
  body, input, button {
    ${tw`font-sans text-base`}
  }
  h1, h2, h3, h4, h5, h6, strong {
    ${tw`font-medium`}
  }
  button{
    ${tw`cursor-pointer`}
  }
`;
