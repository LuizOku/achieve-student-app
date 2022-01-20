import * as React from 'react';
import { Animated, Modal } from 'react-native';

import PropTypes from 'prop-types';

import { Container, PressAway, Sheet } from './styles.css';

const BottomSheet = ({ children, open, size, onClose }) => {
  const [fadeInAnimation] = React.useState(new Animated.Value(0));
  const [translateAnimation] = React.useState(new Animated.Value(-size));
  const [visible, setVisible] = React.useState(false);

  React.useLayoutEffect(() => {
    let timeoutId;

    if (!open) timeoutId = setTimeout(() => setVisible(false), 500);
    else setVisible(true);

    return () => clearTimeout(timeoutId);
  }, [open]);

  React.useLayoutEffect(() => {
    Animated.parallel([
      Animated.timing(translateAnimation, {
        toValue: open ? 0 : -size,
        duration: 300,
        delay: open ? 200 : 0,
        useNativeDriver: false,
      }),
      Animated.timing(fadeInAnimation, {
        toValue: open ? 1 : 0,
        duration: 300,
        delay: open ? 0 : 200,
        useNativeDriver: false,
      }),
    ]).start();
  }, [fadeInAnimation, translateAnimation, open, size]);

  return (
    <Modal visible={visible} transparent onRequestClose={onClose}>
      <Container
        as={Animated.View}
        transition={fadeInAnimation}
        style={{
          opacity: fadeInAnimation,
          bottom: translateAnimation,
        }}
      >
        <PressAway onPress={onClose} />
        <Sheet size={size}>{children}</Sheet>
      </Container>
    </Modal>
  );
};

BottomSheet.propTypes = {
  children: PropTypes.node,
  size: PropTypes.number,
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

BottomSheet.defaultProps = {
  children: null,
  size: 300,
  open: false,
  onClose: () => {},
};

export default BottomSheet;
