import React from 'react';
import { Container, Icon } from './styles';

const IconButton = ({ src, size, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Icon source={src} size={size} />
    </Container>
  );
};

export default IconButton;
