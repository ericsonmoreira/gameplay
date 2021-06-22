import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../../theme';

const ButtonAdd: React.FC<RectButtonProps> = (props) => {
  const { ...rest } = props;

  return (
    <Container {...rest}>
      <MaterialCommunityIcons
        name="plus"
        color={theme.colors.highlight}
        size={24}
      />
    </Container>
  );
};

export default ButtonAdd;
