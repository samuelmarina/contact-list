import React, { useEffect } from 'react';
import {
  Container,
  InnerContainer,
  HeaderContainer,
  Title,
  Subtitle,
  Separator,
} from './styles';

import DetailCard from '../../components/DetailCard';
import ContactImage from '../../components/ContactImage';
import { months } from '../../util/constants/months';

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

  const getPhoneNums = () => {
    if (!phone) {
      return null;
    }

    const phoneNums = [];
    for (const key in phone) {
      phoneNums.push(
        <DetailCard
          label="Phone"
          value={phone[key]}
          type={key}
          key={phone[key]}
        />,
      );
    }

    return phoneNums;
  };

  const getAddress = () => {
    if (!address) {
      return null;
    }

    const { street, city, state, country, zipCode } = address;
    const tempAddress = `${street}\n${city}, ${state} ${zipCode}, ${country}`;

    return <DetailCard label="Address" value={tempAddress} />;
  };

  const getBirthDate = () => {
    if (!birthdate) {
      return null;
    }
    const date = new Date(birthdate);
    const dateStr = `${months[date.getMonth()]} ${
      date.getDate() + 1
    }, ${date.getFullYear()}`;

    return <DetailCard label="Birthdate" value={dateStr} />;
  };

  const getEmail = () => {
    if (!emailAddress) {
      return null;
    }

    return <DetailCard label="Email" value={emailAddress} />;
  };

  return (
    <Container>
      <InnerContainer>
        <HeaderContainer>
          <ContactImage src={largeImageURL} size={150} />
          <Title>{name}</Title>
          <Subtitle>{companyName}</Subtitle>
        </HeaderContainer>
        <Separator />
        {getPhoneNums()}
        {getAddress()}
        {getBirthDate()}
        {getEmail()}
      </InnerContainer>
    </Container>
  );
};

export default ContactDetails;
