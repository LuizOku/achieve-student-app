import styled from 'styled-components/native';

import colors from '../../utils/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const FormContainer = styled.View`
  background: ${colors.WHITE};
  border-radius: 8px;
  padding: 20px;
`;

export const Version = styled.Text`
  text-align: center;
  color: ${colors.BLACK};
  font-size: 15px;
`;
