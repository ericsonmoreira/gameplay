import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import Background from './src/components/Background';
import Routes from './src/routes';
import { theme } from './src/theme';
import { AuthProvider } from './src/context/auth';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={theme}>
      <Background>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </Background>
    </ThemeProvider>
  );
}
