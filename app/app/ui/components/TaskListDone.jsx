import { Box, ListItem, ListItemText } from "@mui/material";
import React from "react";

export const TasksListDone = ({ tasksDone }) => {
  return (
    <>
      {tasksDone.map((taskDone) => (
        <Box
          sx={{
            backgroundColor: "darkgrey",
            width: "50%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "10px",
          }}
          key={taskDone.id}
        >
          <ListItem key={taskDone.id}>
            <ListItemText sx={{ color: "black" }} primary={taskDone.name} />
          </ListItem>
        </Box>
      ))}
    </>
  );
};
