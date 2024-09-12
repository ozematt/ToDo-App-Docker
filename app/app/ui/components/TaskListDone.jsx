export const TasksListDone = ({ tasksDone }) => {
  return (
    <>
      {tasksDone.map((taskDone) => (
        <li key={taskDone.id}>{taskDone.name}</li>
      ))}
    </>
  );
};
