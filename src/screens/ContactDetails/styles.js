import styled from 'styled-components';
import Theme from '../../config/themes/light';

export const Container = styled.View({
  flex: 1,
  padding: 20,
  backgroundColor: Theme.secondary,
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
  color: Theme.primary,
  fontSize: 30,
  marginBottom: 5,
});

export const Subtitle = styled.Text({
  color: Theme.gray,
  fontSize: 15,
});

export const Separator = styled.View({
  borderBottomWidth: 0.3,
  borderBottomColor: Theme.gray,
});
