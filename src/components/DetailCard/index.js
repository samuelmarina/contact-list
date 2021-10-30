import React from 'react';
import { Container, Label, InnerContainer, Value, Type } from './styles';

const DetailCard = ({ label = '', value = '', type = '' }) => {
  return (
    <Container>
      <Label>{label}:</Label>
      <InnerContainer>
        <Value>{value}</Value>
        <Type>{type}</Type>
      </InnerContainer>
    </Container>
  );
};

export default DetailCard;
