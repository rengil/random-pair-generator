import styled from "styled-components";
import ButtonMui from "@material-ui/core/Button";
import { compose, spacing, positions, borders } from '@material-ui/system';

export const Button = styled(ButtonMui)`
  && {
    color: #333333;
    background-color: #FBDC4B!important;
    line-height: 14px;
    font-size: 12px;
    outline-width: 0;
    padding: 14px 56px;
    height: 47px;
    border-radius: 1px;
    ${spacing}
  }
`;