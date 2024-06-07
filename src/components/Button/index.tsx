import { memo } from "react";
import { Button as AntButton, ButtonProps as AntButtonProps } from "antd";
import { ThemeColors, theme } from "../../theme";
import { Icons } from "../Icon/config";
import { Icon } from "../Icon";

type Props = {
  icon?: Icons;
  iconSize?: string;
  iconRotation?: string;
  textColor?: ThemeColors;
  fullWidth?: boolean;
} & Pick<AntButtonProps, "type" | "children" | "onClick" | "href" | "target">;

const ButtonCmp = ({
  type,
  children,
  icon,
  iconSize,
  iconRotation,
  textColor,
  fullWidth,
  href,
  target,
  onClick,
}: Props) => {
  return (
    <AntButton
      target={target}
      style={{
        display: "flex",
        alignItems: "center",
        padding: type === "link" ? 0 : undefined,
        color: textColor ? theme.colors[textColor] : undefined,
      }}
      icon={
        icon ? (
          <Icon name={icon} size={iconSize} rotation={iconRotation} />
        ) : null
      }
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
