import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import { Container, Content, IconWrapper, Title, Square } from './styles';

type CategoryProps = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
};

const Category: React.FC<CategoryProps> = (props) => {
  const { title, icon: Icon, checked, ...rest } = props;

  return (
    <RectButton {...rest}>
      <Container>
        <Content checked={checked}>
          <Square checked={checked} />
          <IconWrapper>
            <Icon width={48} height={48} />
          </IconWrapper>
          <Title>{title}</Title>
        </Content>
      </Container>
    </RectButton>
  );
};

export default Category;
