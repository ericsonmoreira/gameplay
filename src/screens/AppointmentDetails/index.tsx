import { Fontisto } from '@expo/vector-icons';
import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import BannerImg from '../../assets/banner.png';
import Background from '../../components/Background';
import Header from '../../components/Header';
import ListDivider from '../../components/ListDivider';
import ListHeader from '../../components/ListHeader';
import Members, { MembersData } from '../../components/Members';
import { theme } from '../../theme';
import {
  Banner,
  BannerContent,
  SubTitle,
  Title,
  MembersList,
  Footer,
} from './styles';
import ButtonIcon from '../../components/ButtonIcon';

const AppointmentDetails: React.FC = () => {
  const members: MembersData[] = [
    {
      id: '1',
      username: 'Éricson',
      avatar_url: 'https://github.com/ericsonmoreira.png',
      status: 'online',
    },
    {
      id: '2',
      username: 'Rogério',
      avatar_url: 'https://github.com/ericsonmoreira.png',
      status: 'offline',
    },
    {
      id: '3',
      username: 'Moreira',
      avatar_url: 'https://github.com/ericsonmoreira.png',
      status: 'offline',
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />
      <Banner source={BannerImg}>
        <BannerContent>
          <Title>Lendários</Title>
          <SubTitle>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </SubTitle>
        </BannerContent>
      </Banner>
      <ListHeader title="Jogadores" subTitle="Total 3" />

      <MembersList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Members data={item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
      />

      <Footer>
        <ButtonIcon title="Entrar na partida" />
      </Footer>
    </Background>
  );
};

export default AppointmentDetails;
