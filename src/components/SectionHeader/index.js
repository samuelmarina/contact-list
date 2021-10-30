import React from 'react';
import { Container, Text } from './styles';

const SectionHeader = ({ children }) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  );
};

export default SectionHeader;
