import styled from 'styled-components/native';

import colors from '../../utils/colors';

export const Container = styled.View`
  flex-direction: column;
  margin-bottom: 4px;
`;
export const Error = styled.Text`
  font-size: 13px;
  color: ${colors.ERROR};
  padding-left: 5px;
`;
export const TextInput = styled.TextInput`
  color: ${colors.BLACK};
  padding: 0 5px;
  font-size: 18px;
  line-height: 23px;
  height: 55px;
  border-radius: 8px;
  border: ${(props) =>
    props.error ? `2px solid ${colors.ERROR}` : `2px solid ${colors.GRAY}`};
  background-color: ${(props) =>
    props.editable ? colors.WHITE : colors.DISABLED};
`;
