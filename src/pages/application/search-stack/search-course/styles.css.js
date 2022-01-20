import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

import colors from '../../../../utils/colors';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const Content = styled.ScrollView`
  flex: 1;
  background: ${colors.WHITE};
`;

export const FiltersContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: center;
  background-color: ${colors.WHITE};
  padding: 10px 0;
  border: ${`2px solid ${colors.GRAY}`};
`;

export const CardContainer = styled.View`
  width: ${() => Dimensions.get('window').width - 30}px;
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

export const CardText = styled.Text`
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  color: ${colors.SECONDARY};
  font-size: 15px;
  margin-left: ${(props) => (props.withMargin ? '10px' : '0px')};
  flex: 0 1 auto;
`;

export const BottomSheetText = styled.Text`
  font-size: ${(props) => (props.isTitle ? 20 : 17)}px;
  color: ${colors.SECONDARY};
  text-align: center;
  margin-bottom: ${(props) => (props.noMargin ? 0 : 20)}px;
  font-weight: ${(props) => (props.isTitle ? 'bold' : 'normal')};
`;

export const BottomSheetContainer = styled.View``;
