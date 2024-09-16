"use client";
import { App } from "./ui/components/App";
import { SwitchButton, theme } from "./ui/components/mui/theme";
import { ThemeProvider } from "@mui/material/styles";
import { ShowNewTaskProvider } from "./utils/contextAPI";
import { CssBaseline } from "@mui/material";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ShowNewTaskProvider>
          <CssBaseline />
          <App />
          <SwitchButton />
        </ShowNewTaskProvider>
      </ThemeProvider>
    </>
  );
}
