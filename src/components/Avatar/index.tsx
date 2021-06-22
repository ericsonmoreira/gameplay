import React from 'react';
import { Container, AvatarImage } from './styles';

export interface AvatarProps {
  urlImage: string;
}

const Avatar: React.FC<AvatarProps> = (props) => {
  const { urlImage } = props;

  return (
    <Container>
      <AvatarImage source={{ uri: urlImage }} />
    </Container>
  );
};

export default Avatar;
