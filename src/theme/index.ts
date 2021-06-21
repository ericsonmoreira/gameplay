import { DefaultTheme } from 'styled-components/native';

// necessário fazer essa redefinição para o typescript
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      shapes: string;
      bg: string;
      heading: string;
      body: string;
      line: string;
    };
  }
}

export default {
  colors: {
    primary: '#E51C44',
    secondary: '#495BCC',
    shapes: '#243189',
    bg: '#0E1647',
    heading: '#DDE3F0',
    body: '#ABB1CC',
    line: '#991F36',
  },
} as DefaultTheme;
