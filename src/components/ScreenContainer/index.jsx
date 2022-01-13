import * as React from 'react';
import { StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Constants from 'expo-constants';
import PropTypes from 'prop-types';

import {
  Container,
  ImageBackground,
  ColorBackground,
  mapBarStyle,
  InsideTouchableWithoutFeedbackContainer,
} from './styles.css';

const ScreenContainer = ({
  background,
  backgroundMode,
  backgroundColor,
  statusBarMode,
  children,
  style,
  className,
  keyboardAvoiding,
  noPadding,
}) => (
  <>
    <StatusBar
      barStyle={mapBarStyle(statusBarMode)}
      translucent
      backgroundColor="rgba(0, 0, 0, 0.2)"
    />
    {typeof background === 'number' ? (
      <ImageBackground
        source={background}
        resizeMode={backgroundMode}
        backgroundColor={backgroundColor}
      />
    ) : (
      <ColorBackground color={backgroundColor} />
    )}
    {keyboardAvoiding ? (
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{
          flex: 1,
          flexGrow: 1,
          paddingHorizontal: noPadding ? 0 : 15,
          paddingBottom: 0,
          backgroundColor: backgroundColor || 'transparent',
          paddingTop: Constants.statusBarHeight,
          ...style,
        }}
      >
        <InsideTouchableWithoutFeedbackContainer>
          {children}
        </InsideTouchableWithoutFeedbackContainer>
      </KeyboardAwareScrollView>
    ) : (
      <Container style={style} noPadding={noPadding} className={className}>
        {children}
      </Container>
    )}
  </>
);

ScreenContainer.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  backgroundMode: PropTypes.oneOf(['cover', 'stretch']),
  backgroundColor: PropTypes.string,
  statusBarMode: PropTypes.oneOf(['default', 'light', 'dark']),
  keyboardAvoiding: PropTypes.bool,
  noPadding: PropTypes.bool,
};

ScreenContainer.defaultProps = {
  background: '#F9FAF9',
  backgroundMode: 'cover',
  backgroundColor: 'transparent',
  statusBarMode: 'default',
  keyboardAvoiding: false,
  noPadding: false,
};

export default ScreenContainer;
