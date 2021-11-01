import React from 'react';
import { View } from 'react-native';
import {
  Container,
  ImageContainer,
  InnerContainer,
  DataContainer,
  EmojiContainer,
  Title,
  Subtitle,
} from './styles';
import ContactImage from '../ContactImage';

const Contact = ({ data = {}, isFav = false, navigation, index }) => {
  const { name, companyName, smallImageURL } = data;

  const handlePress = () => {
    navigation.navigate('ContactDetails', {
      data,
      index,
    });
  };

  return (
    <Container onPress={handlePress}>
      <ImageContainer>
        <ContactImage size={60} src={smallImageURL} />
      </ImageContainer>
      <InnerContainer>
        <DataContainer>
          <EmojiContainer>{isFav && <Title>⭐</Title>}</EmojiContainer>
          <View>
            <Title>{name}</Title>
            <Subtitle>{companyName}</Subtitle>
          </View>
        </DataContainer>
      </InnerContainer>
    </Container>
  );
};

export default Contact;
