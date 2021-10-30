import styled from 'styled-components';

export const Container = styled.TouchableOpacity({
  width: '100%',
  backgroundColor: 'white',
  flexDirection: 'row',
  padding: 20,
});

export const ImageContainer = styled.View({
  marginRight: 20,
});

export const ContactImage = styled.Image(({ size = 100 }) => ({
  width: size,
  height: size,
}));

export const InnerContainer = styled.View({
  justifyContent: 'center',
});

export const DataContainer = styled.View({
  flexDirection: 'row',
});

export const EmojiContainer = styled.View({
  marginRight: 5,
  width: 25,
});

export const Title = styled.Text({
  color: 'black',
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 3,
});

export const Subtitle = styled.Text({
  color: 'gray',
  fontSize: 15,
  fontWeight: 'normal',
});
