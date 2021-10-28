import { CircularProgress } from "@mui/material";
import { teal } from "@mui/material/colors";
import React from "react";

export const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </div>
  );
};
