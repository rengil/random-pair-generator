import styled from 'styled-components';

import {
  flexbox as Flex,
  palette,
  PaletteProps,
  spacing,
  SpacingProps,
  typography,
  TypographyProps,
} from '@material-ui/system';

const Box = styled.div<
  PaletteProps & SpacingProps & TypographyProps
>`${palette}${spacing}${typography}`;

export { Flex, Box };
