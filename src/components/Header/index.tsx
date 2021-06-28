import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { theme } from '../../theme';
import { BackButton, Container, Title } from './styles';

interface HeaderProps {
  title: string;
  action?: ReactNode;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { title, action } = props;

  const navigate = useNavigation();

  const { secondary100, secondary40, heading } = theme.colors;

  const handleGoBack = () => {
    navigate.goBack();
  };

  return (
    <Container colors={[secondary100, secondary40]}>
      <BackButton onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={heading} />
      </BackButton>
      <Title>{title}</Title>
      {action ? <View>{action}</View> : <View style={{ width: 24 }} />}
    </Container>
  );
};

export default Header;
