import React from 'react';
import { SectionList } from 'react-native';

import Contact from '../../components/Contact';
import { Container, Separator } from './styles';
import SectionHeader from '../../components/SectionHeader';

const ContactList = () => {
  const data = [
    {
      title: 'Favs',
      data: [
        {
          name: 'Pedro Perez',
          isFav: true,
        },
      ],
    },
    {
      title: 'Others',
      data: [
        {
          name: 'Pedro Perez',
          isFav: true,
        },
      ],
    },
  ];

  const renderItem = ({ item, index }) => {
    const { name, address, isFav } = item;
    return <Contact name={name} address={address} isFav={isFav} key={index} />;
  };

  const renderSectionHeader = ({ section: { title } }) => {
    return <SectionHeader>{title}</SectionHeader>;
  };

  return (
    <Container>
      <SectionList
        sections={data}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        renderSectionHeader={renderSectionHeader}
      />
    </Container>
  );
};

export default ContactList;
