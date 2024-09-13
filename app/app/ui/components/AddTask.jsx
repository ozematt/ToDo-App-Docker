import React, { useState } from "react";
import { Box, List, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { TaskList } from "./TaskList";
import { TasksListDone } from "./TaskListDone";

const schema = z
  .object({
    name: z.string().min(3),
  })
  .required();

export const AddTask = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ resolver: zodResolver(schema) });

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
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography variant="h5"> New Task</Typography>
        <Box
          component="new_task"
          sx={{
            display: "inline-block",
          }}
        >
          <TextField
            {...register("title")}
            label="Title"
            variant="outlined"
            error={!!errors.title}
            helperText={errors.title && errors.title.message}
            sx={{ width: "600px", marginBottom: "10px" }}
          />
          <TextField
            {...register("description")}
            label="Description"
            variant="outlined"
            error={!!errors.description}
            helperText={errors.description && errors.description.message}
            sx={{ width: "600px", marginBottom: "10px" }}
          />
        </Box>
        <Box sx={{}}>
          <Button
            sx={{ marginRight: "10px" }}
            variant="contained"
            color="primary"
          >
            Cancel
          </Button>
          <Button sx={{}} variant="contained" color="primary" type="submit">
            Add
          </Button>
        </Box>
      </Box>

      {/* <Box>
        {tasks.length > 0 && (
          <List>
            <br />
            <Typography variant="h5">TaskList:</Typography>
            <TaskList tasks={tasks} handleTaskDone={handleTaskDone} />
          </List>
        )}
        {tasksDone.length > 0 && (
          <List>
            <br />
            <Typography variant="h5">Done:</Typography>
            <TasksListDone tasksDone={tasksDone} />
          </List>
        )}
      </Box> */}
    </>
  );
};
