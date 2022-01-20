import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

import colors from '../../../../utils/colors';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const Header = styled.View`
  flex-direction: column;
  height: 250px;
  background: ${colors.SECONDARY};
  border-bottom-right-radius: ${Dimensions.get('window').width}px;
  border-bottom-left-radius: ${Dimensions.get('window').width}px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${colors.WHITE};
  padding: 10px 10px;
  font-size: 30px;
`;

export const Content = styled.ScrollView`
  flex: 1;
  background: ${colors.WHITE};
`;

export const DriverPicture = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 90px;
  border-width: 2px;
  border-color: ${colors.PRIMARY};
  align-self: center;
`;

export const GraySection = styled.View`
  background: ${colors.LIGHT_GRAY};
  padding: 20px;
`;

export const WhiteSection = styled.View`
  background: ${colors.WHITE};
  padding: 20px;
`;

export const Subtitle = styled.Text`
  font-weight: bold;
  color: ${colors.SECONDARY};
  padding: 10px 10px;
  font-size: 15px;
`;

export const CardText = styled.Text`
  font-size: 15px;
  color: ${(props) => (props.color ? colors.SECONDARY : colors.DARK_GRAY)};
  margin-left: 10px;
`;
