import { Typography, Box, Button } from "@mui/material";
import { AddTask } from "./AddTask";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box
          component="section"
          sx={{
            padding: "10px",
            height: "20vh",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h4" gutterBottom>
            ToDo-App:
          </Typography>
          <Button
            variant="outlined"
            sx={{ padding: "10px", marginLeft: "20px" }}
          >
            Add New Task
          </Button>
        </Box>
        <AddTask />
      </Container>
    </>
  );
};
