import React, { useState } from 'react';
import Appointment, { AppointmentData } from '../../components/Appointment';
import ButtonAdd from '../../components/ButtonAdd';
import CategorySelect from '../../components/CategorySelect';
import ListHeader from '../../components/ListHeader';
import Profile from '../../components/Profile';
import { Container, Content, Header, Matches } from './styles';
import ListDivider from '../../components/ListDivider';

const Home: React.FC = () => {
  const [category, setCategory] = useState<number | null>(null);

  const handleCategorySelected = (categoryId: number) => {
    categoryId == category ? setCategory(null) : setCategory(categoryId);
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
  ];

  return (
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
          renderItem={({ item }) => <Appointment data={item} />}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
        />
      </Content>
    </Container>
  );
};

export default Home;
