import styled from 'styled-components';
import Theme from '../../config/themes/light';

export const Container = styled.View({
  flex: 1,
});

export const LoaderContainer = styled.View({
  marginTop: 50,
});

export const Separator = styled.View({
  borderBottomWidth: 0.3,
  borderBottomColor: Theme.gray,
  marginHorizontal: 20,
});
