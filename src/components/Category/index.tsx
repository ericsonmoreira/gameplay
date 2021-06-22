import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import { theme } from '../../theme';
import { Container, Content, IconWrapper, Title, Square } from './styles';

type CategoryProps = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
  hasCheckBox?: boolean;
};

const Category: React.FC<CategoryProps> = (props) => {
  const { title, icon: Icon, checked, hasCheckBox, ...rest } = props;

  const { secondary40, secondary50, secondary75 } = theme.colors;

  return (
    <RectButton {...rest}>
      <Container>
        <Content
          colors={[checked ? secondary75 : secondary50, secondary40]}
          style={{ opacity: checked ? 1 : 0.5 }}
        >
          {hasCheckBox && <Square checked={checked} />}
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
