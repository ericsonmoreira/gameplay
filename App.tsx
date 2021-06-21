import React from 'react';
import Signin from './src/screens/Signin';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Signin />
    </ThemeProvider>
  );
}
