import React from 'react';

import PropTypes from 'prop-types';

import colors from '../../utils/colors';
import { Container, Error, TextInput } from './styles.css';

function Input({
  value,
  onChangeText,
  onBlur,
  placeholder,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  editable,
  maxLength,
  error,
  style,
}) {
  return (
    <Container editable={editable} style={style}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        editable={editable}
        autoCorrect={false}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        maxLength={maxLength}
        placeholderTextColor={colors.GRAY}
        error={error}
      />
      {error !== '' && <Error>{error}</Error>}
    </Container>
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.oneOf([
    'default',
    'number-pad',
    'decimal-pad',
    'numeric',
    'email-address',
    'phone-pad',
  ]),
  autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
  editable: PropTypes.bool,
  maxLength: PropTypes.number,
  error: PropTypes.string,
  style: PropTypes.object,
};

Input.defaultProps = {
  secureTextEntry: false,
  keyboardType: 'default',
  autoCapitalize: 'none',
  editable: true,
  maxLength: 500,
  error: '',
  style: {},
};

export default Input;
