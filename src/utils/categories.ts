import { ReactNode } from 'react';

import Ranked from '../assets/ranked.svg';
import Duel from '../assets/duel.svg';
import Fun from '../assets/fun.svg';
import Training from '../assets/training.svg';

interface Categories {
  id: number;
  title: string;
  icon: ReactNode;
}

const categories: Categories[] = [
  {
    id: 1,
    title: 'Ranqueada',
    icon: Ranked,
  },
  {
    id: 2,
    title: 'Duele 1x1',
    icon: Duel,
  },
  {
    id: 3,
    title: 'Diversão',
    icon: Fun,
  },
  {
    id: 3,
    title: 'Training',
    icon: Training,
  },
];

export default categories;
