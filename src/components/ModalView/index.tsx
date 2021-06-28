import React, { ReactNode } from 'react';
import { ModalProps, Modal, TouchableWithoutFeedback } from 'react-native';
import { Container, Overlay, Bar } from './styles';
import Background from '../Background';

type ModalViewProps = ModalProps & {
  children: ReactNode;
  closeModal(): void;
};

const ModalView: React.FC<ModalViewProps> = (props) => {
  const { children, closeModal, ...rest } = props;

  return (
    <Modal transparent animationType="slide" statusBarTranslucent {...rest}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <Overlay>
          <Container>
            <Background>
              <Bar />
              {children}
            </Background>
          </Container>
        </Overlay>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalView;
