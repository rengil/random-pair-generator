import styled from 'styled-components';

import {
  flexbox,
  borders,
  palette,
  PaletteProps,
  spacing,
  SpacingProps,
  typography,
  sizing,
  TypographyProps,
} from '@material-ui/system';

const Box = styled.div<
  PaletteProps & SpacingProps & TypographyProps
>`${palette}${spacing}${typography}`;

const FlexRow = styled.div<PaletteProps & SpacingProps & TypographyProps>`
  ${flexbox}
  ${spacing}
  ${borders}
  ${palette}
  ${sizing}
  display: flex;
  flex-direction: row;
`;

const FlexCol = styled.div<PaletteProps & SpacingProps & TypographyProps>`
  ${flexbox}
  ${spacing}
  ${borders}
  ${sizing}
  ${palette}
  display: flex;
  flex-direction: column;
`;

export { FlexCol, FlexRow, Box };
