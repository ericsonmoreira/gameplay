import React, { ReactNode } from 'react';
import { ModalProps, Modal } from 'react-native';
import { Container, Overlay, Bar } from './styles';
import Background from '../Background';

type ModalViewProps = ModalProps & {
  children: ReactNode;
};

const ModalView: React.FC<ModalViewProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <Modal transparent animationType="slide" {...rest}>
      <Overlay>
        <Container>
          <Background>
            <Bar />
            {children}
          </Background>
        </Container>
      </Overlay>
    </Modal>
  );
};

export default ModalView;
