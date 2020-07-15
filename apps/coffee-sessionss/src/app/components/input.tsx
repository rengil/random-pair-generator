import styled from 'styled-components';
import { compose, spacing, positions, borders } from '@material-ui/system';

const Input = styled('input')(compose(spacing, positions, borders));

export { Input }