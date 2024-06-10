import { ReactNode, memo } from "react";
import { CardProps as AntCardProps } from "antd";
import { Image } from "../Image";
import Meta from "antd/es/card/Meta";
import StyledCard from "./styled";

export type CardProps = {
  action?: ReactNode;
  title?: string;
  description?: string;
  cover?: string;
} & Pick<AntCardProps, "extra" | "children" | "size" | "onClick" | "className">;

const CardCmp = ({
  children,
  extra,
  cover,
  size,
  action,
  title,
  description,
  className,
  onClick,
}: CardProps) => {
  return (
    <StyledCard
      className={className}
      onClick={onClick}
      hoverable
      style={{
        overflow: "hidden",
      }}
      styles={{
        cover: {
          height: "200px",
          maxHeight: "200px",
          minHeight: "200px",
          overflow: "hidden",
        },
      }}
      size={size}
      extra={extra}
      cover={
        <Image
          src={cover}
          alt={title}
          height={"100%"}
          width={"100%"}
          style={{
            objectFit: "cover",
            borderRadius: "0px",
          }}
        />
      }
      actions={action ? [action] : undefined}
    >
      <Meta title={title} description={description} />
      {children}
    </StyledCard>
  );
};

export const Card = memo(CardCmp);
