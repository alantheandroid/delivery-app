import React, { CSSProperties, memo } from "react";
import AntText, { TextProps as AntTextProps } from "antd/es/typography/Text";
import AntTitle from "antd/es/typography/Title";
import { ThemeColors, theme } from "../../theme";

const variants = { h1: 1, h2: 2, h3: 3, h4: 4, h5: 5 } as const;

type Props = {
  color?: ThemeColors;
  align?: CSSProperties["textAlign"];
  rows?: number;
} & Pick<AntTextProps, "italic" | "strong" | "children"> & {
    variant?: keyof typeof variants;
  };

const TextCmp = ({
  variant,
  children,
  color,
  italic,
  strong,
  align,
  rows,
}: Props) => {
  const level = variant && variants[variant];
  const Component = level ? AntTitle : AntText;

  return (
    <Component
      ellipsis={{
        rows,
        expanded: !!rows,
        defaultExpanded: !!rows,
      }}
      style={{
        color: color ? theme.colors[color] : "inherit",
        textAlign: align,
        fontWeight: strong ? (variant ? 800 : 600) : "",
      }}
      level={level}
      italic={italic}
    >
      {children}
    </Component>
  );
};

export const Text = memo(TextCmp);
