import { Button } from "@mui/material";

export const TaskList = ({ tasks, handleTaskDone }) => {
  return (
    <>
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
    </>
  );
};
