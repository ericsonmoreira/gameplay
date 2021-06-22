import { DefaultTheme } from 'styled-components/native';

// necessário fazer essa redefinição para o typescript
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary100: string;
      secondary90: string;
      secondary80: string;
      secondary75: string;
      secondary70: string;
      secondary60: string;
      secondary50: string;
      secondary40: string;
      secondary30: string;
      overlay: string;
      highlight: string;
      heading: string;
      line: string;
      on: string;
    };
    fonts: {
      title700: string;
      title500: string;
      text400: string;
      text500: string;
    };
  }
}

export const theme = {
  colors: {
    primary: '#E51C44',

    secondary100: '#0A1033',
    secondary90: '#0D133D',
    secondary80: '#0E1647',
    secondary75: '#171F52',
    secondary70: '#1B2565',
    secondary60: '#1B2565',
    secondary50: '#243189',
    secondary40: '#1D2766',
    secondary30: '#495BCC',

    overlay: 'rgba(0,0,0,0.7)',
    highlight: '#ABB1CC',
    heading: '#DDE3F0',
    line: '#991F36',
    on: '#32BD50',
  },

  fonts: {
    title700: 'Rajdhani_700Bold',
    title500: 'Rajdhani_500Medium',
    text400: 'Inter_400Regular',
    text500: 'Inter_500Medium',
  },
} as DefaultTheme;
