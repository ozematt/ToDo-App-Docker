"use client";
import { AddTask } from "./ui/components/AddTask";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Typography variant="h5" sx={{ padding: "30px" }}>
        ToDo-App:
      </Typography>
      <AddTask />
    </>
  );
}
