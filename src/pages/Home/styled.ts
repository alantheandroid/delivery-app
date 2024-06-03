import styled from "styled-components";
import { StyledBox } from "../../components/Box/styled";

const StyledRestaurantsGrid = styled(StyledBox)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

export default StyledRestaurantsGrid;
