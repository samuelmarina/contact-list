import React from 'react';
import {
  Container,
  Label,
  InnerContainer,
  Value,
  Type,
  Separator,
} from './styles';

const DetailCard = ({ label = '', value = '', type = '' }) => {
  return (
    <Container>
      <Label>{label}:</Label>
      <InnerContainer>
        <Value>{value}</Value>
        <Type>{type}</Type>
      </InnerContainer>
      <Separator />
    </Container>
  );
};

export default DetailCard;
