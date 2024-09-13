import { ListItem, ListItemText } from "@mui/material";
import React from "react";

export const TasksListDone = ({ tasksDone }) => {
  return (
    <>
      {tasksDone.map((taskDone) => (
        <ListItem
          key={taskDone.id}
          sx={{
            "&:hover": {
              backgroundColor: "action.hover",
            },
          }}
        >
          <ListItemText
            primary={taskDone.title}
            secondary={taskDone.description}
          />
        </ListItem>
      ))}
    </>
  );
};
