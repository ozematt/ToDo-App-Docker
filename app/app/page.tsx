"use client";
import { AddTask } from "./ui/components/AddTask";
import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material";
// import { useState } from "react";

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
