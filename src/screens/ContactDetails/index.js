import React, { useCallback, useContext, useEffect } from 'react';
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
import IconButton from '../../components/IconButton';
import { useState } from 'react/cjs/react.development';
import { ContactsContext } from '../../util/ContactsContext';
import { addToFavorites, removeFromFavorites } from '../../helpers/contacts';

const ContactDetails = ({ navigation, route }) => {
  const { favList, setFavList, othersList, setOthersList } =
    useContext(ContactsContext);
  const { data, index } = route.params;
  const {
    largeImageURL,
    name,
    companyName,
    phone,
    address,
    birthdate,
    emailAddress,
    isFavorite,
  } = data;
  const [isFav, setIsFav] = useState(isFavorite);
  const favTruePath = '../../assets/fav/true/favTrue.png';
  const favFalsePath = '../../assets/fav/false/favFalse.png';
  const [source, setSource] = useState(
    isFavorite ? require(favTruePath) : require(favFalsePath),
  );
  const [currentIndex, setCurrentIndex] = useState(index);

  const toggleFavorite = useCallback(async () => {
    let i = 0;
    if (isFav) {
      i = await removeFromFavorites(
        data,
        currentIndex,
        favList,
        othersList,
        setFavList,
        setOthersList,
      );
    } else {
      i = await addToFavorites(
        data,
        currentIndex,
        favList,
        othersList,
        setFavList,
        setOthersList,
      );
    }
    setCurrentIndex(i);
    setIsFav(prev => !prev);
    navigation.setOptions({
      headerRight: () => <IconButton src={source} onPress={toggleFavorite} />,
    });
  }, [
    currentIndex,
    data,
    favList,
    isFav,
    navigation,
    othersList,
    setFavList,
    setOthersList,
    source,
  ]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <IconButton src={source} onPress={toggleFavorite} />,
    });
  }, [navigation, source, toggleFavorite]);

  useEffect(() => {
    if (!isFav) {
      setSource(require(favFalsePath));
    } else {
      setSource(require(favTruePath));
    }
  }, [isFav]);

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
