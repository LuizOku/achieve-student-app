import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

import colors from '../../utils/colors';

export const Container = styled.View`
  width: ${Dimensions.get('window').width - 30}px;
  border-radius: 8px;
  background: #fafafa;
  padding: 10px;
  margin: 10px 0;
`;

export const Header = styled.TouchableOpacity`
  height: 30px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 10px;
`;

export const Title = styled.Text`
  color: ${colors.SECONDARY};
  font-size: 17px;
  text-align: center;
  font-weight: bold;
`;

export const Panel = styled.View`
  padding: 10px;
`;

export const shadowContainerStyles = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
};
