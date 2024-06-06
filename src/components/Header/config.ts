import { ButtonProps } from "antd";

export const navLinks: {
  label: string;
  path: string;
  type?: ButtonProps["type"];
}[] = [
  { label: "Sign in", path: "/" },
  { label: "Register", path: "/", type: "primary" },
];
