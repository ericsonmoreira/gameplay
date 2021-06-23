import React from 'react';
import Avatar from '../Avatar';
import {
  Container,
  Content,
  NameStatus,
  Sphere,
  Status,
  Title,
} from './styles';

export interface MembersData {
  id: string;
  username: string;
  avatar_url: string;
  status: 'online' | 'offline';
}

export interface MembersProps {
  data: MembersData;
}

const Members: React.FC<MembersProps> = (props) => {
  const { data } = props;

  const isOnline = data.status === 'online';

  return (
    <Container>
      <Avatar urlImage={data.avatar_url} />
      <Content>
        <Title>{data.username}</Title>
        <Status>
          <Sphere online={isOnline} />
          <NameStatus>{isOnline ? 'Disponível' : 'Ocupado'}</NameStatus>
        </Status>
      </Content>
    </Container>
  );
};

export default Members;
