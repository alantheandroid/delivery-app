import React, { ReactNode, memo } from "react";
import { Card as AntCard, CardProps as AntCardProps } from "antd";
import { Image } from "../Image";
import Meta from "antd/es/card/Meta";

export type CardProps = {
  action?: ReactNode;
  title?: string;
  cover?: string;
} & Pick<AntCardProps, "extra" | "children" | "size" | "styles" | "style">;

const CardCmp = ({
  children,
  extra,
  cover,
  size,
  style,
  styles,
  action,
  title,
}: CardProps) => {
  return (
    <AntCard
      style={{
        display: "flex",
      }}
      styles={{
        cover: {
          width: "25%",
        },
      }}
      size={size}
      extra={extra}
      cover={
        <Image
          src={cover}
          alt={title}
          width="100%"
          height="100%"
          style={{
            objectFit: "cover",
          }}
        />
      }
      actions={action ? [action] : undefined}
    >
      <Meta title={title} />
      {children}
    </AntCard>
  );
};

export const Card = memo(CardCmp);
