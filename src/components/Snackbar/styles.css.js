import styled from 'styled-components/native';

import colors from '../../utils/colors';

export const Container = styled.View`
  position: absolute;
  top: 50;
  left: 0;
  width: 100%;
  justify-content: center;
  z-index: ${(props) => (props.open || props.animating ? 1 : -1)};
`;

export const Snack = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background: ${(props) => {
    switch (props.type) {
      case 'ERROR':
        return colors.ERROR;
      case 'SUCCESS':
        return colors.SUCCESS;
      case 'WARNING':
        return colors.WARN;
      case 'INFO':
        return colors.INFO;
      default:
        return colors.DARK_GRAY;
    }
  }};
  border-radius: 5px;
  padding: 16px;
`;

export const StyledText = styled.Text`
  color: white;
  flex-basis: 0;
  flex-grow: 1;
`;

export const shadowStyles = {
  shadowColor: colors.BLACK,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
};
