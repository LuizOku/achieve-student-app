import { Dimensions } from 'react-native';

import Constants from 'expo-constants';
import styled from 'styled-components/native';

export const mapBarStyle = (statusBarMode) => {
  if (statusBarMode === 'default') return statusBarMode;
  return `${statusBarMode}-content`;
};

export const Container = styled.View`
  display: flex;
  flex: 1;
  padding: ${(props) => (props.noPadding ? 0 : 15)}px;
  padding-bottom: 0px;
  padding-top: ${Constants.statusBarHeight}px;
  background-color: ${(props) => props.backgroundColor || 'transparent'};
`;

export const InsideTouchableWithoutFeedbackContainer = styled.View`
  flex: 1;
`;

export const ImageBackground = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: ${Dimensions.get('window').height + Constants.statusBarHeight + 1}px;
  background-color: ${(props) => props.backgroundColor || 'transparent'};
`;

export const ColorBackground = styled.View`
  position: absolute;
  width: 100%;
  height: ${Dimensions.get('window').height + Constants.statusBarHeight + 1}px;
  background-color: ${(props) => props.color};
`;
