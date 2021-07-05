import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import Appointment, { AppointmentData } from '../../components/Appointment';
import Background from '../../components/Background';
import ButtonAdd from '../../components/ButtonAdd';
import CategorySelect from '../../components/CategorySelect';
import ListDivider from '../../components/ListDivider';
import ListHeader from '../../components/ListHeader';
import Load from '../../components/Load';
import Profile from '../../components/Profile';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import useCategorySelect from '../../hooks/CategorySelect';
import RoutesNames from '../../routes/names.routes';
import { Container, Header, Matches } from './styles';

const Home: React.FC = () => {
  const navigations = useNavigation();

  const [categorySelected, setCategorySelected] = useCategorySelect();

  const [appointments, setAppointments] = useState<AppointmentData[]>([]);

  const [loading, setLoading] = useState(true);

  const handleAppointmentDetails = () => {
    navigations.navigate(RoutesNames.AppointmentDetails);
  };

  const handleAppointmentCreate = () => {
    navigations.navigate(RoutesNames.AppointmentCreate);
  };

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);

    const storage: AppointmentData[] = response ? JSON.parse(response) : [];

    if (categorySelected) {
      setAppointments(
        storage.filter((item) => item.category === categorySelected)
      );
    } else {
      setAppointments(storage);
    }

    setLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      loadAppointments();
    }, [categorySelected])
  );

  return (
    <Background>
      <Container>
        <Header>
          <Profile />
          <ButtonAdd onPress={handleAppointmentCreate} />
        </Header>
        <CategorySelect
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
        />

        {loading ? (
          <Load />
        ) : (
          <>
            <ListHeader title="Partidas agendadas" subTitle="Total 6" />

            <Matches
              data={appointments}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <Appointment onPress={handleAppointmentDetails} data={item} />
              )}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <ListDivider />}
              contentContainerStyle={{ paddingBottom: 69 }}
            />
          </>
        )}
      </Container>
    </Background>
  );
};

export default Home;
