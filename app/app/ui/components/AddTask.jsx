import React, { useContext, useState } from "react";
import { Box, List, Stack, Typography } from "@mui/material";
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

  const { handleButtonClick } = useGlobalState();

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
