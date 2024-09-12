import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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
  } = useForm({ resolver: zodResolver(schema) });

  const [tasks, setTasks] = useState([]);
  const [tasksDone, setTasksDone] = useState([]);

  console.log(tasks);

  const onSubmit = (data) => {
    const newTask = { name: data.name, id: uuidv4() };
    setTasks([...tasks, newTask]);
  };

  const handleTaskDone = (taskDone) => {
    setTasks(tasks.filter((task) => task.id !== taskDone.id));
    setTasksDone([...tasksDone, taskDone]);
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
          error={!!errors.name}
          helperText={errors.name && errors.name.message}
        />
        <Button variant="contained" color="primary" type="submit">
          Add
        </Button>
      </Box>
      <ul>
        <br />
        TaskList:
        {tasks.map((task) => (
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            key={task.id}
          >
            <li>{task.name}</li>
            <div>
              {" "}
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleTaskDone(task)}
              >
                Done
              </Button>
            </div>
          </div>
        ))}
      </ul>
      <div style={{ width: "350px", borderTop: "1px solid white" }} />
      <ul>
        Done:
        {tasksDone.map((taskDone) => (
          <li key={taskDone.id}>{taskDone.name}</li>
        ))}
      </ul>
    </>
  );
};
