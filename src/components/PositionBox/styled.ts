import styled from "styled-components";
import { PositionBoxProps } from ".";
import { StyledBox } from "../Box/styled";

export const StyledPositionBox = styled(StyledBox)<PositionBoxProps>`
  position: ${({ $position }) => $position};
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  right: ${({ $right }) => $right};
  bottom: ${({ $bottom }) => $bottom};
  inset: ${({ $inset }) => $inset};
`;
