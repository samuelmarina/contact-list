import React, { useEffect, useState } from 'react';
import { SectionList, ActivityIndicator, Alert, Text } from 'react-native';

import Contact from '../../components/Contact';
import { Container, Separator, LoaderContainer } from './styles';
import SectionHeader from '../../components/SectionHeader';
import axios from '../../util/axios';
import { text } from '../../util/constants/text';
import { nameComparator } from '../../helpers/comparators';

const ContactList = ({ navigation }) => {
  const [data, setData] = useState([{ title: 'Temp', data: [] }]);
  const [isLoading, setIsLoading] = useState(true);
  const [favList, setFavList] = useState({ title: text.favContacts, data: [] });
  const [othersList, setOthersList] = useState({
    title: text.otherContacts,
    data: [],
  });

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

        setFavList({
          title: text.favContacts,
          data: tempFav.sort(nameComparator),
        });
        setOthersList({
          title: text.otherContacts,
          data: tempOthers.sort(nameComparator),
        });
        setData([favList, othersList]);
      } catch (e) {
        setIsLoading(false);
        Alert.alert('Error', e.message);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    setData([favList, othersList]);
  }, [favList, othersList]);

  return (
    <Container>
      {isLoading || data.lenght === 0 ? (
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
