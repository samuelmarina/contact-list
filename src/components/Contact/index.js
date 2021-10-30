import React from 'react';
import { View } from 'react-native';
import {
  Container,
  ImageContainer,
  ContactImage,
  InnerContainer,
  DataContainer,
  EmojiContainer,
  Title,
  Subtitle,
} from './styles';

const Contact = ({ name = '', address = '', isFav = false }) => {
  const userImage = '../../assets/user/small/user-sm.png';
  return (
    <Container>
      <ImageContainer>
        <ContactImage size={60} source={require(userImage)} />
      </ImageContainer>
      <InnerContainer>
        <DataContainer>
          <EmojiContainer>{isFav && <Title>⭐</Title>}</EmojiContainer>
          <View>
            <Title>{name}</Title>
            <Subtitle>{address}</Subtitle>
          </View>
        </DataContainer>
      </InnerContainer>
    </Container>
  );
};

export default Contact;
