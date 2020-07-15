import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { style, typography } from '@material-ui/system';

const variant = style({
  prop: 'variant',
  cssProperty: false,
  themeKey: 'typography',
});

const Text = styled.span`
  font-family: Helvetica;
  ${variant}
  ${typography}
`;

export { Text };
