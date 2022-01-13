import styled from 'styled-components/native';

export const TouchableOpacity = styled.TouchableOpacity`
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  height: 55px;

  justify-content: center;
  align-items: center;

  background: ${(props) => props.background};
  border: ${(props) => (props.outlined ? 1 : 0)}px solid
    ${(props) => props.color};
  border-radius: 8px;
  margin: 2px 0;
`;

export const Text = styled.Text`
  color: ${(props) => (props.primary ? 'white' : props.color)};
  text-transform: ${(props) => (props.noUppercase ? 'none' : 'uppercase')};
  padding: 0 16px;
  font-weight: bold;
`;
