import { Button } from "@mui/material";
import React from "react";

export const ButtonAdd = ({ handleButtonClick }) => {
  return (
    <Button
      variant="outlined"
      sx={{ padding: "10px", marginLeft: "20px" }}
      onClick={handleButtonClick}
    >
      Add New Task
    </Button>
  );
};
