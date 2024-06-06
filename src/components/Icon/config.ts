import { FaAngleRight, FaArrowRight, FaMagnifyingGlass } from "react-icons/fa6";

export const icons = {
  angle: FaAngleRight,
  arrow: FaArrowRight,
  search: FaMagnifyingGlass,
} as const;

export type Icons = keyof typeof icons;
