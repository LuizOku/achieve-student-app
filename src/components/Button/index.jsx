import * as React from 'react';
import { ActivityIndicator } from 'react-native';

import PropTypes from 'prop-types';

import colors from '../../utils/colors';
import { TouchableOpacity, Text } from './styles.css';

const Button = ({
  children,
  disabled,
  onPress,
  outlined,
  background,
  color,
  noUppercase,
  loading,
  style,
  className,
  fullWidth,
}) => (
  <TouchableOpacity
    disabled={disabled}
    outlined={outlined}
    background={background}
    color={color}
    onPress={loading ? null : onPress}
    style={style}
    className={className}
    fullWidth={fullWidth}
  >
    {loading ? (
      <ActivityIndicator color={color} />
    ) : (
      <Text noUppercase={noUppercase} color={color}>
        {children}
      </Text>
    )}
  </TouchableOpacity>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
  outlined: PropTypes.bool,
  color: PropTypes.string,
  background: PropTypes.string,
  noUppercase: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  background: colors.PRIMARY,
  outlined: false,
  color: colors.WHITE,
  noUppercase: false,
  loading: false,
  disabled: false,
  fullWidth: false,
};

export default Button;
