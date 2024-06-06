import styled from "styled-components";
import { StyledBox } from "../../components/Box/styled";

const StyledRestaurantsGrid = styled(StyledBox)`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  gap: ${({ theme }) => theme.spacing.xxxl};
`;

export default StyledRestaurantsGrid;
