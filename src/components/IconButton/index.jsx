import * as React from 'react';

import PropTypes from 'prop-types';

import { TouchableOpacity } from './styles.css';

function IconButton({ children, onPress, style, className }) {
  return (
    <TouchableOpacity onPress={onPress} style={style} className={className}>
      {children}
    </TouchableOpacity>
  );
}

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default IconButton;
