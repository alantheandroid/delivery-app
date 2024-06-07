import { memo, useEffect } from "react";
import { Footer as AntFooter } from "antd/es/layout/layout";
import { Content as AntContent } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import { theme } from "../../theme";
import { Header } from "../Header";
import { StyledHeaderContainer, StyledLayout } from "./styled";

const LayoutCmp = () => {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        console.log("Desktop");
      } else {
        console.log("Tablet");
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <StyledLayout>
      <StyledHeaderContainer>
        <Header />
      </StyledHeaderContainer>

      <AntContent
        style={{
          paddingBlock: theme.spacing.md,
          paddingInline: theme.spacing.xxxl,
        }}
      >
        <Outlet />
      </AntContent>
      <AntFooter
        style={{
          backgroundColor: theme.colors.white,
          borderRadius: `0 0 ${theme.spacing.xxxl} ${theme.spacing.xxxl}`,
        }}
      ></AntFooter>
    </StyledLayout>
  );
};

export const Layout = memo(LayoutCmp);
