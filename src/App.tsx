import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalStyle";
import { antTheme, theme } from "./theme";
import { ConfigProvider } from "antd";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { FlowerProvider } from "@stackhouseos/flower-react";

function App() {
  return (
    <FlowerProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ConfigProvider theme={antTheme}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ConfigProvider>
      </ThemeProvider>
    </FlowerProvider>
  );
}

export default App;
