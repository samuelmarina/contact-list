import styled from 'styled-components';

export const Image = styled.Image(({ size = 100 }) => ({
  width: size,
  height: size,
}));
