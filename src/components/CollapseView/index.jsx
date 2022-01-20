import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import {
  Container,
  Header,
  Title,
  Panel,
  shadowContainerStyles,
} from './styles.css';

function CollapseView({ title, children, startOpened }) {
  const [isOpen, setOpen] = useState(startOpened);
  return (
    <Container style={shadowContainerStyles}>
      <Header onPress={() => setOpen(!isOpen)}>
        <Title>{title}</Title>
        <Feather
          name={isOpen ? 'chevron-up' : 'chevron-down'}
          color="#757575"
          size={30}
        />
      </Header>
      {isOpen && <Panel>{children}</Panel>}
    </Container>
  );
}

CollapseView.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  startOpened: PropTypes.bool,
};

CollapseView.defaultProps = {
  children: null,
  startOpened: false,
};

export default CollapseView;
