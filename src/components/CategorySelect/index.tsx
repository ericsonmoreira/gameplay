import React from 'react';
import categories from '../../utils/categories';
import Category from '../Category';
import { Container } from './styles';

interface CategorySelectProps {
  categorySelected: string;
  setCategorySelected: (categoryId: string) => void;
  hasCheckBox?: boolean;
}

const CategorySelect: React.FC<CategorySelectProps> = (props) => {
  const { categorySelected, setCategorySelected, hasCheckBox } = props;
  return (
    <Container horizontal={true}>
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={categorySelected === category.id}
          onPress={() => setCategorySelected(category.id)}
          hasCheckBox={hasCheckBox}
        />
      ))}
    </Container>
  );
};

export default CategorySelect;
