import { memo, useEffect } from "react";
import { CarouselProps as AntCarouselProps } from "antd";
import StyledCarousel from "./styled";

type Props = Pick<
  AntCarouselProps,
  | "infinite"
  | "slidesToScroll"
  | "swipeToSlide"
  | "arrows"
  | "variableWidth"
  | "children"
>;

const CarouselCmp = ({
  slidesToScroll,
  swipeToSlide,
  arrows,
  variableWidth,
  infinite,
  children,
}: Props) => {
  useEffect(() => {
    const slickTrack = document.querySelector(".slick-track");
    slickTrack?.childNodes.forEach((child) => {
      (child as HTMLElement).classList.add("slick-active");
    });
  }, []);

  return (
    <StyledCarousel
      dots={false}
      slidesToScroll={slidesToScroll}
      swipeToSlide={swipeToSlide}
      arrows={arrows}
      variableWidth={variableWidth}
      infinite={infinite}
    >
      {children}
    </StyledCarousel>
  );
};

export const Carousel = memo(CarouselCmp);
