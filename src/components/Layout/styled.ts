import Layout, { Header } from "antd/es/layout/layout";
import styled from "styled-components";

export const StyledLayout = styled(Layout)`
  border-radius: 0;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.lg};
  padding-top: ${({ theme }) => theme.spacing.xl};
  min-height: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    border-radius: ${({ theme }) => theme.spacing.xxxl};
    min-height: unset;
  }
`;

export const StyledHeaderContainer = styled(Header)`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 99;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xxxl}`};

  border-radius: ${({ theme }) =>
    `${theme.spacing.xxxl} ${theme.spacing.xxxl} 0 0`};
  height: max-content;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    border-radius: 0;
  }
`;
