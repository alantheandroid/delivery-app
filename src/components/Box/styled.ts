import styled from "styled-components";
import { BoxProps } from ".";

export const StyledBox = styled.div<Omit<BoxProps, "children">>`
  display: ${({ $display }) => $display ?? "flex"};
  flex-direction: ${({ $flexDirection }) =>
    $flexDirection ? $flexDirection : "inherit"};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  padding: ${({ theme, $padding }) =>
    $padding
      ? Array.isArray($padding)
        ? $padding.map((p) => theme.spacing[p]).join(" ")
        : theme.spacing[$padding]
      : ""};
  margin: ${({ theme, $margin }) =>
    $margin
      ? Array.isArray($margin)
        ? $margin.map((m) => theme.spacing[m]).join(" ")
        : theme.spacing[$margin]
      : ""};
  gap: ${({ theme, $gap }) => $gap && theme.spacing[$gap]};
  flex: ${({ $flex }) => $flex};
  flex-wrap: ${({ $flexWrap }) => $flexWrap};
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  background-color: ${({ theme, $backgroundColor }) =>
    $backgroundColor && (theme.colors[$backgroundColor] || $backgroundColor)};
  box-shadow: ${({ $boxShadow }) => $boxShadow};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  overflow: ${({ $overflow }) => $overflow};
  z-index: ${({ $zIndex }) => $zIndex};
`;
