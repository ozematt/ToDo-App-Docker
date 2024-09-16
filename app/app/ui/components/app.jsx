import { Typography, Box, Select, MenuItem } from "@mui/material";
import { AddTask } from "./AddTask";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import { ButtonAdd } from "./ButtonAdd";
import { useGlobalState } from "../../utils/contextAPI";
import { useColorScheme } from "@mui/material";
import { CustomizedSwitches } from "./SwitchButton";

export const App = () => {
  const { clickedButton, handleButtonClick } = useGlobalState();

  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }

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
          {/* Switch */}
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "background.default",
              color: "text.primary",
              borderRadius: 1,
              p: 3,
              minHeight: "56px",
            }}
          >
            <Select
              value={mode}
              onChange={(event) => setMode(event.target.value)}
            >
              <MenuItem value="system">System</MenuItem>
              <MenuItem value="light">Light</MenuItem>
              <MenuItem value="dark">Dark</MenuItem>
            </Select>
          </Box>
          <CustomizedSwitches />
        </Box>

        {clickedButton && <AddTask />}
      </Container>
    </>
  );
};
