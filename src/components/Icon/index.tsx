import { memo, useMemo } from "react";
import { icons, type Icons } from "./config";
import { StyledIcon } from "./styled";
import { ThemeColors } from "../../theme";

type Props = {
  name: Icons;
  size?: string;
  color?: ThemeColors;
  rotation?: string;
};

const IconCmp = ({ name, size, color, rotation }: Props) => {
  const IconComponent = useMemo(() => icons[name], [name]);

  return (
    <StyledIcon
      $size={Number(size)}
      $color={color}
      $rotation={Number(rotation)}
    >
      <IconComponent />
    </StyledIcon>
  );
};

export const Icon = memo(IconCmp);
