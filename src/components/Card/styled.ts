import { Card } from "antd";
import styled from "styled-components";

const SPEED = "0.2s";
const HOVER_SCALE = 1.05;

const StyledCard = styled(Card)`
  transition: all ${SPEED};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  border-radius: ${({ theme }) => theme.spacing.xl};

  &:hover {
    z-index: 1;
    transform: scale(${HOVER_SCALE});
  }
`;

export default StyledCard;
