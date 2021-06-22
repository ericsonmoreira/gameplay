import React from 'react';
import ButtonAdd from '../../components/ButtonAdd';
import Profile from '../../components/Profile';
import { Container, Header } from './styles';
import CategorySelect from '../../components/CategorySelect';
import { useState } from 'react';

const Home: React.FC = () => {
  const [category, setCategory] = useState<number | null>(null);

  const handleCategorySelected = (categoryId: number) => {
    categoryId == category ? setCategory(null) : setCategory(categoryId);
  };

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
    </Container>
  );
};

export default Home;
