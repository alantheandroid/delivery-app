"use client";

import React, { CSSProperties, memo } from "react";
import { BoxProps } from "../Box";
import { StyledPositionBox } from "./styled";

export type PositionBoxProps = BoxProps & {
  $top?: CSSProperties["top"];
  $left?: CSSProperties["left"];
  $right?: CSSProperties["right"];
  $bottom?: CSSProperties["bottom"];
  $inset?: CSSProperties["inset"];
  $position?: CSSProperties["position"];
};

const PositionBoxCmp = ({ children, ...rest }: PositionBoxProps) => {
  return <StyledPositionBox {...rest}>{children}</StyledPositionBox>;
};

export const PositionBox = memo(PositionBoxCmp);
