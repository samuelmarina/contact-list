import React, { useEffect, useState } from 'react';
import { SectionList, ActivityIndicator, Alert, Text } from 'react-native';

import Contact from '../../components/Contact';
import { Container, Separator, LoaderContainer } from './styles';
import SectionHeader from '../../components/SectionHeader';
import axios from '../../util/axios';

const ContactList = ({ navigation }) => {
  // const data = [
  //   {
  //     title: 'Favs',
  //     data: [
  //       {
  //         name: 'Pedro Perez',
  //         isFav: true,
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Others',
  //     data: [
  //       {
  //         name: 'Pedro Perez',
  //         isFav: true,
  //       },
  //     ],
  //   },
  // ];

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favList, setFavList] = useState([{ title: 'Favs', data: [] }]);
  const [othersList, setOthersList] = useState([{ title: 'Others', data: [] }]);

  const renderItem = ({ item, index }) => {
    const { isFavorite } = item;
    return (
      <Contact
        data={item}
        isFav={isFavorite}
        key={index}
        navigation={navigation}
      />
    );
  };

  const renderSectionHeader = ({ section: { title } }) => {
    return <SectionHeader>{title}</SectionHeader>;
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('/contacts.json');
        setIsLoading(false);
        const tempFav = [];
        const tempOthers = [];
        response.data.forEach(item => {
          if (item.isFavorite) {
            tempFav.push(item);
          } else {
            tempOthers.push(item);
          }
        });

        setFavList({ title: 'Favs', data: tempFav });
        setOthersList({ title: 'Others', data: tempOthers });
        setData([favList, othersList]);
      } catch (e) {
        setIsLoading(false);
        Alert.alert('Error', e.message);
      }
    };
    getData();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <LoaderContainer>
          <ActivityIndicator size="large" />
        </LoaderContainer>
      ) : (
        <SectionList
          sections={data}
          renderItem={renderItem}
          ItemSeparatorComponent={Separator}
          renderSectionHeader={renderSectionHeader}
        />
      )}
    </Container>
  );
};

export default ContactList;
