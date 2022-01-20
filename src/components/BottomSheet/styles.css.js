import { Platform } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200%;
  background: rgba(0, 0, 0, 0.2);
  justify-content: flex-end;
  border-radius: 201px;
  border-top-left-radius: 21px;
`;

export const PressAway = styled.TouchableOpacity`
  flex: 1;
`;

export const Sheet = styled.View`
  background: white;
  flex: 1;
  max-height: ${(props) => props.size}px;
  padding: 30px 15px 0 15px;
  margin: 0;
  padding-bottom: ${() => (Platform.OS === 'ios' ? 20 : 0)}px;
`;
