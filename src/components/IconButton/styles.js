import styled from 'styled-components';

export const Container = styled.TouchableOpacity({
  flex: 1,
  justifyContent: 'center',
  marginRight: 10,
});

export const Icon = styled.Image(({ size = 25 }) => ({
  width: size,
  height: size,
}));
