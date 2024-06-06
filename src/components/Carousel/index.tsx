import React, { memo } from "react";
import {
  Carousel as AntCarousel,
  CarouselProps as AntCarouselProps,
} from "antd";

type Props = Pick<
  AntCarouselProps,
  | "autoplay"
  | "dots"
  | "speed"
  | "slidesToShow"
  | "slidesToScroll"
  | "swipeToSlide"
  | "arrows"
  | "infinite"
  | "variableWidth"
  | "rows"
  | "slidesPerRow"
  | "centerMode"
  | "children"
>;

const CarouselCmp = ({
  autoplay,
  dots = false,
  speed,
  slidesToShow,
  slidesToScroll,
  swipeToSlide,
  arrows,
  infinite,
  variableWidth,
  rows,
  slidesPerRow,
  centerMode,
  children,
}: Props) => {
  return (
    <AntCarousel
      autoplay={autoplay}
      dots={dots}
      speed={speed}
      slidesToShow={slidesToShow}
      slidesToScroll={slidesToScroll}
      swipeToSlide={swipeToSlide}
      arrows={arrows}
      infinite={infinite}
      variableWidth={variableWidth}
      rows={rows}
      slidesPerRow={slidesPerRow}
      centerMode={centerMode}
    >
      {children}
    </AntCarousel>
  );
};

export const Carousel = memo(CarouselCmp);
