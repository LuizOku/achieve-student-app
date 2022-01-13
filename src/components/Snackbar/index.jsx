import * as React from 'react';

import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import { Container, Snack, StyledText, shadowStyles } from './styles.css';

const Snackbar = ({ children, open, type, onPress }) => (
  <Container open={open}>
    <Snack activeOpacity={1} type={type} onPress={onPress} style={shadowStyles}>
      <StyledText>{children}</StyledText>
      <Feather name="x" color="white" size={16} style={{ marginLeft: 8 }} />
    </Snack>
  </Container>
);

Snackbar.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['ERROR', 'SUCCESS', 'WARNING', 'INFO']),
  open: PropTypes.bool,
  onPress: PropTypes.func,
};

Snackbar.defaultProps = {
  children: null,
  type: '',
  open: false,
  onPress: () => {},
};

export default Snackbar;
