import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Appointment from '../../components/Appointment';
import Background from '../../components/Background';
import ButtonAdd from '../../components/ButtonAdd';
import CategorySelect from '../../components/CategorySelect';
import ListDivider from '../../components/ListDivider';
import ListHeader from '../../components/ListHeader';
import Profile from '../../components/Profile';
import useCategorySelect from '../../hooks/CategorySelect';
import RoutesNames from '../../routes/names.routes';
import data from './data';
import { Container, Header, Matches } from './styles';

const Home: React.FC = () => {
  const navigations = useNavigation();

  const [categorySelected, setCategorySelected] = useCategorySelect();

  const handleAppointmentDetails = () => {
    navigations.navigate(RoutesNames.AppointmentDetails);
  };

  const handleAppointmentCreate = () => {
    navigations.navigate(RoutesNames.AppointmentCreate);
  };

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
        <ListHeader title="Partidas agendadas" subTitle="Total 6" />

        <Matches
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Appointment onPress={handleAppointmentDetails} data={item} />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
          contentContainerStyle={{ paddingBottom: 69 }}
        />
      </Container>
    </Background>
  );
};

export default Home;
