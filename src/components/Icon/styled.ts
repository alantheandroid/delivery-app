import { ThemeColors } from "@/theme";
import styled from "styled-components";
import Icon from "@ant-design/icons";

type Props = { $size?: number; $color?: ThemeColors; $rotation?: number };

export const StyledIcon = styled.div<Props>`
  display: flex;
  ${({ $size }) =>
    $size
      ? `width: ${$size}px ; height: ${$size}px `
      : `width: 28px ;
    height: 28px`};
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
