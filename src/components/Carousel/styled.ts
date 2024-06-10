import { Carousel } from "antd";
import styled from "styled-components";

const StyledCarousel = styled(Carousel)`
  & .slick-arrow {
    color: ${({ theme }) => theme.colors.primary};
  }

  & .slick-list {
    margin: 0 ${({ theme }) => theme.spacing.xxxl};
  }
`;

export default StyledCarousel;
