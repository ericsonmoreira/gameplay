import React from 'react';
import { SvgProps } from 'react-native-svg';
import Duel from '../assets/duel.svg';
import Fun from '../assets/fun.svg';
import Ranked from '../assets/ranked.svg';
import Training from '../assets/training.svg';

interface Categories {
  id: string;
  title: string;
  icon: React.FC<SvgProps>;
}

const categories: Categories[] = [
  {
    id: '1',
    title: 'Ranqueada',
    icon: Ranked,
  },
  {
    id: '2',
    title: 'Duele 1x1',
    icon: Duel,
  },
  {
    id: '3',
    title: 'Diversão',
    icon: Fun,
  },
  {
    id: '4',
    title: 'Training',
    icon: Training,
  },
];

export default categories;
