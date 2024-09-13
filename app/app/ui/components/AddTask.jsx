import React, { useState } from "react";
import { Box, Divider, List, Stack, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { TaskList } from "./TaskList";
import { TasksListDone } from "./TaskListDone";
import { useGlobalState } from "../../utils/contextAPI";

const schema = z
  .object({
    title: z.string().min(3),
    description: z.string().min(5),
  })
  .required();

export const AddTask = () => {
  ////DATA
  //form state
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  //task state
  const [tasks, setTasks] = useState([]);
  const [tasksDone, setTasksDone] = useState([]);

  //global state
  const { handleButtonClick } = useGlobalState();

  //handle add new task
  const onSubmit = (data) => {
    const newTask = {
      title: data.title,
      description: data.description,
      id: uuidv4(),
    };
    setTasks([...tasks, newTask]);
    reset();
  };

  //add to done list
  const handleTaskDone = (taskDone) => {
    console.log(taskDone);
    setTasks(tasks.filter((task) => task.id !== taskDone.id));
    setTasksDone([...tasksDone, taskDone]);
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h5"> New Task</Typography>
        <Box
          component="new_task"
          sx={{
            display: "inline-block",
            width: 700,
            maxWidth: "100%",
          }}
        >
          <TextField
            {...register("title")}
            label="Title"
            variant="outlined"
            error={!!errors.title}
            helperText={errors.title && errors.title.message}
            margin="dense"
            fullWidth
          />
          <TextField
            {...register("description")}
            label="Description"
            variant="outlined"
            error={!!errors.description}
            helperText={errors.description && errors.description.message}
            margin="dense"
            fullWidth
          />
        </Box>
        <Stack spacing={2} direction="row" sx={{ marginTop: 2 }}>
          <Button
            sx={{ marginRight: "10px" }}
            variant="contained"
            color="primary"
            onClick={handleButtonClick}
          >
            Cancel
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Add
          </Button>
        </Stack>
      </Box>

      <Box>
        {tasks.length > 0 && (
          <List>
            <br />
            <Divider />
            <br />
            <Typography variant="h5">TaskList:</Typography>
            <TaskList tasks={tasks} handleTaskDone={handleTaskDone} />
          </List>
        )}
        {tasksDone.length > 0 && (
          <List>
            <br />
            <Divider />
            <br />
            <Typography variant="h5">Done:</Typography>
            <TasksListDone tasksDone={tasksDone} />
          </List>
        )}
      </Box>
    </>
  );
};
