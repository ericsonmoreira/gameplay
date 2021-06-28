import { useState } from 'react';

function useCategorySelect(): [string, (categoryId: string) => void] {
  const [category, setCategory] = useState<string>('');

  const handleCategorySelected = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  };

  return [category, handleCategorySelected];
}

export default useCategorySelect;
