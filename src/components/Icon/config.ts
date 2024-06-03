import {
  MdMenu,
  MdSearch,
  MdPersonOutline,
  MdHorizontalRule,
} from "react-icons/md";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export const icons = {
  dash: MdHorizontalRule,
  facebook: FaFacebook,
  instagram: FaInstagram,
  menu: MdMenu,
  search: MdSearch,
  user: MdPersonOutline,
  youtube: FaYoutube,
} as const;

export type Icons = keyof typeof icons;
