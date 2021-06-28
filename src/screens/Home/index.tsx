import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Appointment, { AppointmentData } from '../../components/Appointment';
import Background from '../../components/Background';
import ButtonAdd from '../../components/ButtonAdd';
import CategorySelect from '../../components/CategorySelect';
import ListDivider from '../../components/ListDivider';
import ListHeader from '../../components/ListHeader';
import Profile from '../../components/Profile';
import useCategorySelect from '../../hooks/CategorySelect';
import RoutesNames from '../../routes/names.routes';
import { Container, Content, Header, Matches } from './styles';

const Home: React.FC = () => {
  const navigations = useNavigation();

  const [categorySelected, setCategorySelected] = useCategorySelect();

  const handleAppointmentDetails = () => {
    navigations.navigate(RoutesNames.AppointmentDetails);
  };

  const handleAppointmentCreate = () => {
    navigations.navigate(RoutesNames.AppointmentCreate);
  };

  const appointments: AppointmentData[] = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: '',
        owner: true,
      },
      category: '1',
      date: '18/06 às 21:00h',
      description:
        'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.',
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: '',
        owner: true,
      },
      category: '1',
      date: '18/06 às 21:00h',
      description:
        'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.',
    },
    {
      id: '3',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: '',
        owner: true,
      },
      category: '1',
      date: '18/06 às 21:00h',
      description:
        'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.',
    },
  ];

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
        <Content>
          <ListHeader title="Partidas agendadas" subTitle="Total 6" />
          <Matches
            data={appointments}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <Appointment onPress={handleAppointmentDetails} data={item} />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider />}
          />
        </Content>
      </Container>
    </Background>
  );
};

export default Home;
