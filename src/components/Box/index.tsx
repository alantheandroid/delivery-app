"use client";

import React, { CSSProperties, PropsWithChildren, memo } from "react";
import { StyledBox } from "./styled";
import { ThemeColors, ThemeSpacings } from "../../theme";

export type BoxProps = {
  serial?: string;
  className?: string;
  $display?: CSSProperties["display"];
  $flexDirection?: CSSProperties["flexDirection"];
  $flexWrap?: CSSProperties["flexWrap"];
  $justifyContent?: CSSProperties["justifyContent"];
  $alignItems?: CSSProperties["alignItems"];
  $padding?: ThemeSpacings | ThemeSpacings[];
  $margin?: ThemeSpacings | ThemeSpacings[];
  $gap?: ThemeSpacings;
  $flex?: CSSProperties["flex"];
  $width?: CSSProperties["width"];
  $minWidth?: CSSProperties["minWidth"];
  $maxWidth?: CSSProperties["maxWidth"];
  $height?: CSSProperties["height"];
  $minHeight?: CSSProperties["minHeight"];
  $maxHeight?: CSSProperties["maxHeight"];
  $backgroundColor?: ThemeColors;
  $boxShadow?: CSSProperties["boxShadow"];
  $borderRadius?: CSSProperties["borderRadius"];
  $overflow?: CSSProperties["overflow"];
  $zIndex?: CSSProperties["zIndex"];
} & PropsWithChildren;

const BoxCmp = ({ serial, children, className, ...rest }: BoxProps) => {
  return (
    <StyledBox serial={serial} className={className} {...rest}>
      {children}
    </StyledBox>
  );
};

export const Box = memo(BoxCmp);
