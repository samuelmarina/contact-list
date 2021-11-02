import styled from 'styled-components';
import Theme from '../../config/themes/light';

export const Container = styled.TouchableOpacity({
  width: '100%',
  backgroundColor: Theme.secondary,
  flexDirection: 'row',
  padding: 20,
});

export const ImageContainer = styled.View({
  marginRight: 20,
});

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
  color: Theme.primary,
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 3,
});

export const Subtitle = styled.Text({
  color: Theme.text,
  fontSize: 15,
  fontWeight: 'normal',
});
