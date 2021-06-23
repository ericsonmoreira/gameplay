import { FlatList } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Banner = styled.ImageBackground`
  width: 100%;
  height: 234px;
  margin-bottom: 30px;
`;

export const BannerContent = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: 30px 24px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.heading};
`;

export const SubTitle = styled.Text`
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.colors.heading};
`;

export const MembersList = styled(FlatList)`
  margin-left: 24px;
  margin-top: 27px;
`;

export const Footer = styled.View`
  padding: 20px 24px;
  margin-bottom: ${getBottomSpace()}px;
`;
