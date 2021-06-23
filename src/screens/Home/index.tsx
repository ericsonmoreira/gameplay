import React, { useState } from 'react';
import Appointment, { AppointmentData } from '../../components/Appointment';
import ButtonAdd from '../../components/ButtonAdd';
import CategorySelect from '../../components/CategorySelect';
import ListHeader from '../../components/ListHeader';
import Profile from '../../components/Profile';
import { Container, Content, Header, Matches } from './styles';
import ListDivider from '../../components/ListDivider';
import Background from '../../components/Background';
import { useNavigation } from '@react-navigation/native';
import RoutesNames from '../../routes/names.routes';

const Home: React.FC = () => {
  const [category, setCategory] = useState<string>('');

  const navigations = useNavigation();

  const handleCategorySelected = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  };

  const handleAppointmentDetails = () => {
    navigations.navigate(RoutesNames.AppointmentDetails);
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
          <ButtonAdd />
        </Header>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelected}
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
