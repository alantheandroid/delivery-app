import styled from "styled-components";
import { ThemeColors } from "../../theme";

type Props = { $size?: number; $color?: ThemeColors; $rotation?: number };

export const StyledIcon = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ $size, theme }) =>
    $size
      ? `width: ${$size}px ; height: ${$size}px `
      : `width: ${theme.spacing.xxl} ;
    height: ${theme.spacing.xxl} ;`};
  transform: ${({ $rotation }) =>
    $rotation ? `rotate(${$rotation}deg)` : "rotate(0deg)"};
  transition: 0.5s all;

  > svg {
    fill: ${({ theme, $color }) => $color && (theme.colors[$color] || $color)};
    ${({ $size }) =>
      $size
        ? `width: ${$size}px ; height: ${$size}px `
        : `width: 28px ;
    height: 28px`};
  }
`;
