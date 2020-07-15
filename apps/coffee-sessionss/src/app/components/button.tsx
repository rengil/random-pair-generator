import styled from 'styled-components';
import {
  compose,
  flexbox as Flex,
  borders,
  PaletteProps,
  spacing,
  positions,
  typography,
  TypographyProps,
} from '@material-ui/system'

const Button = styled('button')(compose(spacing, positions, borders));

export { Button }