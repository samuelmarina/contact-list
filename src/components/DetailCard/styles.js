import styled from 'styled-components';

export const Container = styled.View({
  width: '100%',
  backgroundColor: 'white',
  flexDirection: 'column',
  paddingVertical: 10,
});

export const Label = styled.Text({
  color: 'gray',
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
  color: 'black',
  fontWeight: 'bold',
  fontSize: 16,
});

export const Type = styled.Text({
  color: 'gray',
  fontWeight: 500,
  fontSize: 16,
});
