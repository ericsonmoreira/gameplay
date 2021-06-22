import React from 'react';
import categories from '../../utils/categories';
import Category from '../Category';
import { Container } from './styles';

interface CategorySelectProps {
  categorySelected: string;
  setCategory(categoryId: string): void;
  hasCheckBox?: boolean;
}

const CategorySelect: React.FC<CategorySelectProps> = (props) => {
  const { categorySelected, setCategory, hasCheckBox } = props;
  return (
    <Container horizontal={true}>
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={categorySelected === category.id}
          onPress={() => setCategory(category.id)}
          hasCheckBox={hasCheckBox}
        />
      ))}
    </Container>
  );
};

export default CategorySelect;
