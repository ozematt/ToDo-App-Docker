import { IconButton, ListItem, ListItemText } from "@mui/material";

import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import React from "react";

export const TaskList = ({ tasks, handleTaskDone }) => {
  return (
    <>
      {tasks.map((task) => (
        <ListItem
          key={task.id}
          sx={{
            "&:hover": {
              backgroundColor: "action.hover",
            },
          }}
          secondaryAction={
            <IconButton edge="end" aria-label="done">
              <CheckCircleOutlineRoundedIcon
                fontSize="medium"
                onClick={() => handleTaskDone(task)}
              />
            </IconButton>
          }
        >
          <ListItemText primary={task.title} secondary={task.description} />
        </ListItem>
      ))}
    </>
  );
};
