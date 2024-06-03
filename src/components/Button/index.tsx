import React, { memo } from "react";
import { Button as AntButton, ButtonProps as AntButtonProps } from "antd";
import { ThemeColors, theme } from "../../theme";
import { Icons } from "../Icon/config";
import { Icon } from "../Icon";

type Props = {
  icon?: Icons;
  iconSize?: string;
  textColor?: ThemeColors;
  fullWidth?: boolean;
} & Pick<AntButtonProps, "type" | "children" | "onClick" | "href">;

const ButtonCmp = ({
  type,
  children,
  icon,
  iconSize,
  textColor,
  fullWidth,
  href,
  onClick,
}: Props) => {
  return (
    <AntButton
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: type === "link" ? 0 : undefined,
        color: textColor ? theme.colors[textColor] : undefined,
      }}
      icon={icon ? <Icon name={icon} size={iconSize} /> : null}
      type={type}
      onClick={onClick}
      block={fullWidth}
      href={href}
    >
      {children}
    </AntButton>
  );
};

export const Button = memo(ButtonCmp);
