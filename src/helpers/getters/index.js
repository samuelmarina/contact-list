import React from 'react';
import DetailCard from '../../components/DetailCard';
import { text } from '../../util/constants/text';
import { months } from '../../util/constants/months';

export const getPhoneNums = data => {
  if (!data) {
    return null;
  }

  const phoneNums = [];
  for (const key in data) {
    phoneNums.push(
      <DetailCard
        label={text.phone}
        value={data[key]}
        type={key}
        key={data[key]}
      />,
    );
  }

  return phoneNums;
};

export const getAddress = data => {
  if (!data) {
    return null;
  }

  const { street, city, state, country, zipCode } = data;
  const tempAddress = `${street}\n${city}, ${state} ${zipCode}, ${country}`;

  return <DetailCard label={text.address} value={tempAddress} />;
};

export const getBirthDate = data => {
  if (!data) {
    return null;
  }
  const date = new Date(data);
  const dateStr = `${months[date.getMonth()]} ${
    date.getDate() + 1
  }, ${date.getFullYear()}`;

  return <DetailCard label={text.birthdate} value={dateStr} />;
};

export const getEmail = data => {
  if (!data) {
    return null;
  }

  return <DetailCard label={text.emailAddress} value={data} />;
};
