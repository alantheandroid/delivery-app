import React, { memo } from "react";
import { Image as AntImage, ImageProps as AntImageProps } from "antd";

type Props = Pick<AntImageProps, "src" | "alt" | "width" | "height" | "style">;

const ImageCmp = ({ src, alt, width, height, style }: Props) => {
  return (
    <AntImage
      src={src}
      alt={alt}
      preview={false}
      width={width}
      height={height}
      style={style}
    />
  );
};

export const Image = memo(ImageCmp);
