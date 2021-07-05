import { Fontisto } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
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
import { useRoute } from '@react-navigation/native';
import { AppointmentData } from '../../components/Appointment';
import api from '../../services/api';
import { Alert, Platform, Share } from 'react-native';
import Load from '../../components/Load';
import * as Linking from 'expo-linking';

interface AppointmentDetailsParams {
  guildSelectd: AppointmentData;
}

interface Widget {
  id: string;
  name: string;
  instant_invide: string;
  members: MembersData[];
  presence_count: number;
}

const AppointmentDetails: React.FC = () => {
  const route = useRoute();

  const { guildSelectd } = route.params as AppointmentDetailsParams;

  const [loading, setLoading] = useState(true);

  const [widget, setWidget] = useState<Widget>({} as Widget);

  const fetchGuildWidget = async () => {
    try {
      const response = await api.get(
        `/guilds/${guildSelectd.guild.id}/widget.json`
      );

      console.log(response.data);

      setWidget(response.data);
    } catch {
      Alert.alert(
        'Verifique as configurações. Será que o Widget está abilitado?'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleShareInvatation = () => {
    const message =
      Platform.OS === 'ios'
        ? `Junte-se a ${guildSelectd.guild.name}`
        : widget.instant_invide;
    Share.share({
      message,
      url: widget?.instant_invide || '',
    });
  };

  const handleOpenGuild = () => {
    Linking.openURL(widget?.instant_invide);
  };

  useEffect(() => {
    fetchGuildWidget();
  }, []);

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          guildSelectd.guild.owner && (
            <BorderlessButton onPress={handleShareInvatation}>
              <Fontisto name="share" size={24} color={theme.colors.primary} />
            </BorderlessButton>
          )
        }
      />
      <Banner source={BannerImg}>
        <BannerContent>
          <Title>{guildSelectd.guild.name}</Title>
          <SubTitle>{guildSelectd.description}</SubTitle>
        </BannerContent>
      </Banner>

      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader
            title="Jogadores"
            subTitle={`Total ${widget?.members?.length || 0}`}
          />

          <MembersList
            data={widget.members}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Members data={item} />}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
          />
        </>
      )}

      {guildSelectd.guild.owner && (
        <Footer>
          <ButtonIcon title="Entrar na partida" onPress={handleOpenGuild} />
        </Footer>
      )}
    </Background>
  );
};

export default AppointmentDetails;
