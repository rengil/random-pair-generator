import styled from 'styled-components';
import { compose, spacing, positions, borders } from '@material-ui/system';

import InputMui from "@material-ui/core/Input";

export const TextField = () => {

}
export const Input = styled(InputMui)`
  ${positions}
  && {
    color: 'black';
    background: #FFFFFF;
    line-height: 14px;
    font-size: 16px;
    height: 43px;
    border: 1.5px solid #333333;
    outline: none;
    padding-left: 10px;
  }
`;