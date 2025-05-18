"use client";

import { Snackbar, Alert } from "@mui/material";

export default function Toast({
  open,
  setOpen,
  message,
  severity = "info",
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  message: string;
  severity?: "success" | "error" | "info";
}) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={() => setOpen(false)}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={() => setOpen(false)}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
