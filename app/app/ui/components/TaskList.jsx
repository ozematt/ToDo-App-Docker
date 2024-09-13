import { Box, Button, ListItem, ListItemText } from "@mui/material";
import React from "react";

export const TaskList = ({ tasks, handleTaskDone }) => {
  return (
    <>
      {tasks.map((task) => (
        <Box
          sx={{
            backgroundColor: "darkgrey",
            width: "50%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "10px",
          }}
          key={task.id}
        >
          <ListItem>
            <ListItemText sx={{ color: "black" }} primary={task.name} />
          </ListItem>
          <Box>
            {" "}
            <Button
              sx={{
                height: "50px",
                width: "100px",
              }}
              variant="contained"
              color="primary"
              onClick={() => handleTaskDone(task)}
            >
              Done
            </Button>
          </Box>
        </Box>
      ))}
    </>
  );
};
