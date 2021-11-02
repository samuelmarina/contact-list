import styled from 'styled-components';
import Theme from '../../config/themes/light';

export const Container = styled.View({
  width: '100%',
  backgroundColor: Theme.lightGray,
  padding: 5,
  paddingLeft: 15,
});

export const Text = styled.Text({
  color: Theme.primary,
  fontSize: 13,
  fontWeight: 'bold',
  textTransform: 'uppercase',
});
