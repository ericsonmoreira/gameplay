import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import categories from '../../utils/categories';
import GuildIcon from '../GuildIcon';
import {
  Container,
  Content,
  Header,
  Title,
  Category,
  PayersInfo,
  Player,
  Footer,
  DataInfo,
  Date,
  GuildContainer,
} from './styles';
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';
import { theme } from '../../theme';
import { GuildData } from '../Guild';

export interface AppointmentData {
  id: string;
  guild: GuildData;
  category: string;
  date: string;
  description: string;
}

export type AppointmentProps = RectButtonProps & {
  data: AppointmentData;
};

const Appointment: React.FC<AppointmentProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, ...rest } = props;

  const { secondary50, secondary70 } = theme.colors;

  const { owner } = data.guild;

  const category = categories.find((elem) => elem.id === data.category);

  return (
    <RectButton {...rest}>
      <Container>
        <GuildContainer colors={[secondary50, secondary70]}>
          <GuildIcon />
        </GuildContainer>
        <Content>
          <Header>
            <Title>{data.guild.name}</Title>
            <Category>{category?.title}</Category>
          </Header>
          <Footer>
            <DataInfo>
              <CalendarSvg />
              <Date>{data.date}</Date>
            </DataInfo>

            <PayersInfo>
              <PlayerSvg
                fill={owner ? theme.colors.primary : theme.colors.on}
              />
              <Player owner={owner}>{owner ? 'Anfitrião' : 'Visitante'}</Player>
            </PayersInfo>
          </Footer>
        </Content>
      </Container>
    </RectButton>
  );
};

export default Appointment;
