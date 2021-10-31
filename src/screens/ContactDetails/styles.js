import styled from 'styled-components';

export const Container = styled.View({
  flex: 1,
  padding: 20,
  backgroundColor: 'white',
});

export const InnerContainer = styled.ScrollView({
  marginBottom: 10,
});

export const HeaderContainer = styled.View({
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  marginBottom: 15,
});

export const ContactImage = styled.Image(({ size = 100 }) => ({
  width: size,
  height: size,
  marginBottom: 15,
}));

export const Title = styled.Text({
  color: 'black',
  fontSize: 30,
  marginBottom: 5,
});

export const Subtitle = styled.Text({
  color: 'gray',
  fontSize: 15,
});

export const Separator = styled.View({
  borderBottomWidth: 0.3,
  borderBottomColor: 'gray',
});
