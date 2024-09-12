import React, { useState } from "react";
import { Box, List, TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "/app/app/utils/zod/zodSchema.jsx";

import { TaskList } from "./TaskList";
import { TasksListDone } from "./TaskListDone";

export const AddTask = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [tasksDone, setTasksDone] = useState([]);

  console.log(tasks);

  const onSubmit = (data) => {
    const newTask = { name: data.name, id: uuidv4() };
    setTasks([...tasks, newTask]);

    reset();
  };

  const handleTaskDone = (taskDone) => {
    setTasks(tasks.filter((task) => task.id !== taskDone.id));
    setTasksDone([...tasksDone, taskDone]);
  };

  return (
    <>
      <Box
        sx={{ padding: "30px" }}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          {...register("name")}
          label="Task name"
          variant="outlined"
          sx={{
            borderRadius: "10px",
            backgroundColor: "lightgrey",
            width: "550px",
          }}
          error={!!errors.name}
          helperText={errors.name && errors.name.message}
        />
        <Button
          sx={{ width: "60px", height: "55px" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Add
        </Button>

        {tasks.length > 0 && (
          <List>
            <br />
            <Typography variant="h5">TaskList:</Typography>
            <TaskList tasks={tasks} handleTaskDone={handleTaskDone} />
          </List>
        )}
        {/* <div style={{ width: "350px", borderTop: "1px solid white" }} /> */}
        {tasksDone.length > 0 && (
          <List>
            <br />
            <Typography variant="h5">Done:</Typography>
            <TasksListDone tasksDone={tasksDone} />
          </List>
        )}
      </Box>
    </>
  );
};
