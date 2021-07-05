import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Platform, ScrollView, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Background from '../../components/Background';
import Button from '../../components/Button';
import CategorySelect from '../../components/CategorySelect';
import { GuildData } from '../../components/Guild';
import GuildIcon from '../../components/GuildIcon';
import Guilds from '../../components/Guilds';
import Header from '../../components/Header';
import ModalView from '../../components/ModalView';
import SmallInput from '../../components/SmallInput';
import TextArea from '../../components/TextArea';
import useCategorySelect from '../../hooks/CategorySelect';
import { theme } from '../../theme';
import {
  CaractersLimit,
  Column,
  Container,
  Divider,
  Img,
  Field,
  Footer,
  Form,
  Label,
  Select,
  SelectBody,
  Title,
} from './styles';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { useNavigation } from '@react-navigation/native';
import RoutesNames from '../../routes/names.routes';

const AppointmentCreate: React.FC = () => {
  const [categorySelected, setCategorySelected] = useCategorySelect();

  const [openGuildsModal, setOpenGuildsModal] = useState(false);

  const [guild, setGuild] = useState({} as GuildData);

  const navigation = useNavigation();

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [description, setDescription] = useState('');

  const handleOpenGuildsModal = () => {
    setOpenGuildsModal(true);
  };

  const handleCloseGuildsModal = () => {
    setOpenGuildsModal(false);
  };

  const handleGuildSelect = (guildSelect: GuildData) => {
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  };

  const handleDave = async () => {
    const newAppontment = {
      id: uuid.v4(),
      guild,
      category: categorySelected,
      date: `${day}/${month} às ${hour}:${minute}h`,
      description,
    };

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);

    const appointments = storage ? await JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppontment])
    );

    navigation.navigate(RoutesNames.Home);
  };

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Background>
        <ScrollView>
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
            <RectButton onPress={handleOpenGuildsModal}>
              <Select>
                {guild.icon ? (
                  <GuildIcon guildId={guild.id} iconId={guild.icon} />
                ) : (
                  <Img />
                )}

                <SelectBody>
                  <Label>
                    {guild.name ? guild.name : 'Selecione um servidor'}
                  </Label>
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
                <Label style={{ marginBottom: 12 }}>Dia e mês</Label>
                <Column>
                  <SmallInput
                    keyboardType="numeric"
                    maxLength={2}
                    onChangeText={setDay}
                  />
                  <Divider>/</Divider>
                  <SmallInput
                    keyboardType="numeric"
                    maxLength={2}
                    onChangeText={setMonth}
                  />
                </Column>
              </View>
              <View>
                <Label style={{ marginBottom: 12 }}>Hora e minnuto</Label>
                <Column>
                  <SmallInput
                    keyboardType="numeric"
                    maxLength={2}
                    onChangeText={setHour}
                  />
                  <Divider>:</Divider>
                  <SmallInput
                    keyboardType="numeric"
                    maxLength={2}
                    onChangeText={setMinute}
                  />
                </Column>
              </View>
            </Field>
            <Field>
              <Label style={{ marginBottom: 12 }}>Descrição</Label>
              <CaractersLimit>Max 100 caracteres</CaractersLimit>
            </Field>
            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
              onChangeText={setDescription}
            />
            <Footer>
              <Button title="Agendar" onPress={handleDave} />
            </Footer>
          </Form>
        </ScrollView>
      </Background>
      <ModalView visible={openGuildsModal} closeModal={handleCloseGuildsModal}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </Container>
  );
};

export default AppointmentCreate;
