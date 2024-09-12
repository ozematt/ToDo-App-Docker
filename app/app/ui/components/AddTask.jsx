import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import { TaskList } from "./TaskList";

export const AddTask = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [tasks, setTasks] = useState([]);
  const [taskDone, setTaskDone] = useState([]);

  console.log(tasks);

  const onSubmit = (data) => {
    const newTask = { name: data.name, id: uuidv4(), done: false };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("name")}
          label="Task name"
          variant="outlined"
          sx={{
            borderRadius: "10px",
            backgroundColor: "white",
          }}
          fullWidth
        />
        <Button variant="contained" color="primary" type="submit">
          Add
        </Button>
      </Box>
      {/* <ul>{tasks.map(task => (<li key={task.id}>task.name</li>))}</ul> */}
    </>
  );
};
