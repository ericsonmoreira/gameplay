import React from 'react';
import categories from '../../utils/categories';
import Category from '../Category';
import { Container } from './styles';

interface CategorySelectProps {
  categorySelected: number | null;
  setCategory(categoryId: number): void;
}

const CategorySelect: React.FC<CategorySelectProps> = (props) => {
  const { categorySelected, setCategory } = props;
  return (
    <Container horizontal={true}>
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={categorySelected === category.id}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </Container>
  );
};

export default CategorySelect;
