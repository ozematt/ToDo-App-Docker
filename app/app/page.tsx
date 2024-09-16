"use client";
import { App } from "./ui/components/App";
import theme from "./ui/components/mui/theme";
import { ThemeProvider } from "@mui/material/styles";
import { ShowNewTaskProvider } from "./utils/contextAPI";

export default function Home() {
  return (
    <>
      <ShowNewTaskProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ShowNewTaskProvider>
    </>
  );
}
