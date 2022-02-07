import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { Snackbar, Alert } from "@mui/material";

interface Props {
  addTodo(title: string): void;
  todosTitles: string[];
}

export const TodoForm = ({ addTodo, todosTitles }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTitle("");
  };

  const handleCloseSnackbar = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  const [title, setTitle] = useState<string>("");

  const handleOnChange = (event: any) => {
    setTitle(event.target.value);
  };

  const handleOnSubmitClick = (event: any) => {
    event.preventDefault();
    if (!todosTitles.includes(title)) {
      if (title?.trim()) {
        addTodo(title);
        handleClose();
      }
    } else {
      setOpenSnackbar(true);
    }
  };
  return (
    <div>
      <Button
        color="inherit"
        onClick={handleClickOpen}
        endIcon={<AddTaskIcon />}
      >
        Add New Task
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create a new todo item</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add text in the field below then click submit to see a new todo card
            appear!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            required
            id="Title-required"
            label="Title Required"
            value={title}
            onChange={handleOnChange}
            variant="standard"
            fullWidth
          />
          <TextField
            margin="dense"
            id="standard-textarea"
            label="Todo Card Body"
            placeholder="Placeholder"
            multiline
            variant="standard"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnSubmitClick}>Create</Button>
          <Button onClick={handleClose} color="error">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="warning"
          sx={{ width: "100%" }}
        >
          You cannot have duplicate titles!
        </Alert>
      </Snackbar>
    </div>
  );
};
