import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

import colors from '../../../../utils/colors';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const Content = styled.ScrollView`
  flex: 1;
  background-color: ${colors.WHITE};
`;

export const CardContainer = styled.TouchableOpacity`
  width: ${() => Dimensions.get('window').width - 80}px;
  border-radius: 8px;
  margin: 5px;
  padding: 10px;
  flex-direction: row;
  border-color: ${colors.GRAY};
  border-width: 1px;
  background-color: ${colors.WHITE};
`;

export const CardColumn = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  flex-grow: 1;
  border-right-width: ${(props) => (props.hasBorder ? '2px' : '0')};
  border-right-color: ${colors.GRAY};
  width: ${(props) => (props.width ? `${props.width}` : 'auto')};
`;

export const CardRow = styled.View`
  flex-direction: row;
  padding: 5px 10px;
  flex-wrap: wrap;
  width: 100%;
`;

export const CardTitleText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${colors.DARK_GRAY};
`;

export const CardText = styled.Text`
  font-size: 15px;
  color: ${colors.DARK_GRAY};
`;
