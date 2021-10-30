import React from 'react';
import {
  Container,
  HeaderContainer,
  ContactImage,
  Title,
  Subtitle,
  Separator,
} from './styles';

import DetailCard from '../../components/DetailCard';

const ContactDetails = () => {
  const src = '../../assets/user/large/user-lg.png';
  return (
    <Container>
      <HeaderContainer>
        <ContactImage source={require(src)} size={150} />
        <Title>Pedro Perez</Title>
        <Subtitle>Calle La Cantera</Subtitle>
      </HeaderContainer>
      <Separator />
      <DetailCard label="Phone" value="(302) 559-0519" type="Mobile" />
    </Container>
  );
};

export default ContactDetails;
