import React, { memo } from "react";
import AntLayout from "antd/es/layout/layout";
import { Header as AntHeader } from "antd/es/layout/layout";
import { Footer as AntFooter } from "antd/es/layout/layout";
import { Content as AntContent } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import { theme } from "../../theme";
import { Header } from "../Header";

const LayoutCmp = () => {
  return (
    <AntLayout
      style={{
        minHeight: "100%",
      }}
    >
      <AntHeader
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Header />
      </AntHeader>
      <AntContent>
        <Outlet />
      </AntContent>
      <AntFooter
        style={{
          backgroundColor: theme.colors.white,
        }}
      >
        Footer
      </AntFooter>
    </AntLayout>
  );
};

export const Layout = memo(LayoutCmp);
