import styled from 'styled-components';
import Theme from '../../config/themes/light';

export const Container = styled.View({
  width: '100%',
  backgroundColor: Theme.secondary,
  flexDirection: 'column',
  paddingVertical: 10,
  marginTop: 10,
});

export const Label = styled.Text({
  color: Theme.gray,
  fontWeight: 600,
  fontSize: 15,
  textTransform: 'uppercase',
  marginBottom: 10,
});

export const InnerContainer = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const Value = styled.Text({
  color: Theme.primary,
  fontWeight: 'bold',
  fontSize: 16,
});

export const Type = styled.Text({
  color: Theme.gray,
  fontWeight: 500,
  fontSize: 16,
  textTransform: 'capitalize',
});

export const Separator = styled.View({
  borderBottomWidth: 0.3,
  borderBottomColor: Theme.gray,
  marginTop: 20,
});
