import { Typography, Box, Button } from "@mui/material";
import { AddTask } from "./AddTask";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import { useContext } from "react";
import { useState } from "react";
import { ButtonAdd } from "./ButtonAdd";
import { useGlobalState } from "../../utils/contextAPI";

export const App = () => {
  const { clickedButton, handleButtonClick } = useGlobalState();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ padding: "10px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h4" gutterBottom>
            ToDo-App:
          </Typography>
          {!clickedButton && (
            <ButtonAdd handleButtonClick={handleButtonClick} />
          )}
        </Box>
        {clickedButton && <AddTask />}
      </Container>
    </>
  );
};
