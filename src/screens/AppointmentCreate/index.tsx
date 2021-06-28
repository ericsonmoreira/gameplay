import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import Background from '../../components/Background';
import CategorySelect from '../../components/CategorySelect';
import Header from '../../components/Header';
import {
  Label,
  Form,
  Select,
  SelectBody,
  Title,
  // Img,
} from './styles';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../theme';
import useCategorySelect from '../../hooks/CategorySelect';
import GuildIcon from '../../components/GuildIcon';

const AppointmentCreate: React.FC = () => {
  const [categorySelected, setCategorySelected] = useCategorySelect();

  return (
    <Background>
      <Header title="Agendar partida" />

      <Title>
        <Label>Categoria</Label>
      </Title>

      <CategorySelect
        hasCheckBox
        categorySelected={categorySelected}
        setCategorySelected={setCategorySelected}
      />

      <Form>
        <RectButton>
          <Select>
            {/* <Img /> */}

            <GuildIcon />
            <SelectBody>
              <Label>Selecione um servidor</Label>
            </SelectBody>
            <Feather
              name="chevron-right"
              color={theme.colors.heading}
              size={18}
            />
          </Select>
        </RectButton>
      </Form>
    </Background>
  );
};

export default AppointmentCreate;
