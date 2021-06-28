import { Feather } from '@expo/vector-icons';
import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import Background from '../../components/Background';
import CategorySelect from '../../components/CategorySelect';
import GuildIcon from '../../components/GuildIcon';
import Header from '../../components/Header';
import SmallInput from '../../components/SmallInput';
import useCategorySelect from '../../hooks/CategorySelect';
import { theme } from '../../theme';
import {
  Container,
  Column,
  Divider,
  // Img,
  Field,
  Form,
  Label,
  Select,
  SelectBody,
  Title,
  CaractersLimit,
  Footer
} from './styles';

import { View, ScrollView, Platform } from 'react-native';
import TextArea from '../../components/TextArea';

import Button from '../../components/Button';

const AppointmentCreate: React.FC = () => {
  const [categorySelected, setCategorySelected] = useCategorySelect();

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
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

            <Field>
              <View>
                <Label>Dia e mês</Label>
                <Column>
                  <SmallInput keyboardType="numeric" maxLength={2} />
                  <Divider>/</Divider>
                  <SmallInput keyboardType="numeric" maxLength={2} />
                </Column>
              </View>
              <View>
                <Label>Hora e minnuto</Label>
                <Column>
                  <SmallInput keyboardType="numeric" maxLength={2} />
                  <Divider>:</Divider>
                  <SmallInput keyboardType="numeric" maxLength={2} />
                </Column>
              </View>
            </Field>
            <Field>
              <Label>Descrição</Label>
              <CaractersLimit>Max 100 caracteres</CaractersLimit>
            </Field>
            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />
            <Footer>
              <Button title="Agendar" />
            </Footer>
          </Form>
        </Background>
      </ScrollView>
    </Container>
  );
};

export default AppointmentCreate;
