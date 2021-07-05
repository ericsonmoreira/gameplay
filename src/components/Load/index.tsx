import React from 'react';
import { Container } from './styles';
import { ActivityIndicator } from 'react-native';
import { theme } from '../../theme';

const Load: React.FC = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Container>
  );
};

export default Load;
