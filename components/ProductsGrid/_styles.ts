import styled from 'styled-components';
import { Grid, Typography } from '@material-ui/core';

const StyledGrid = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled(Typography)`
&&& {
  text-align: center;
  margin: 0 auto;
  padding-bottom: 2rem;
}
`;

export const Styled = {
  StyledGrid,
  Title,
};
