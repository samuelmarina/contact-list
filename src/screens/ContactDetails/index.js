import React, { useEffect } from 'react';
import {
  Container,
  InnerContainer,
  HeaderContainer,
  Title,
  Subtitle,
  Separator,
} from './styles';
import ContactImage from '../../components/ContactImage';
import {
  getPhoneNums,
  getAddress,
  getBirthDate,
  getEmail,
} from '../../helpers/getters';

const ContactDetails = ({ route }) => {
  const {
    largeImageURL,
    name,
    companyName,
    phone,
    address,
    birthdate,
    emailAddress,
  } = route.params;

  return (
    <Container>
      <InnerContainer>
        <HeaderContainer>
          <ContactImage src={largeImageURL} size={150} />
          <Title>{name}</Title>
          <Subtitle>{companyName}</Subtitle>
        </HeaderContainer>
        <Separator />
        {getPhoneNums(phone)}
        {getAddress(address)}
        {getBirthDate(birthdate)}
        {getEmail(emailAddress)}
      </InnerContainer>
    </Container>
  );
};

export default ContactDetails;
