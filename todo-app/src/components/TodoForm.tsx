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

interface Props {
  addTodo(title: string, body: string): void;
  todosTitles: string[];
}

export const TodoForm = ({ addTodo, todosTitles }: Props) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [titleError, setTitleError] = React.useState<boolean>(false);
  const [titleErrorText, setTitleErrorText] = React.useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTitle("");
    setBody("");
  };

  const handleOnTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (!todosTitles.includes(title)) {
      setTitleError(false);
      setTitleErrorText("");
    }
  };

  const handleOnBodyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBody(event.target.value);
  };

  const handleOnSubmitClick = (event: any) => {
    event.preventDefault();
    if (todosTitles.includes(title)) {
      setTitleError(true);
      setTitleErrorText("Title already exists");
    } else if (title?.trim()) {
      addTodo(title, body);
      handleClose();
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
            error={titleError}
            autoFocus
            margin="dense"
            required
            label="Title Required"
            value={title}
            onChange={handleOnTitleChange}
            variant="standard"
            fullWidth
            helperText={titleErrorText}
          />
          <TextField
            margin="dense"
            label="Todo Card Body"
            placeholder="Placeholder"
            multiline
            variant="standard"
            fullWidth
            onChange={handleOnBodyChange}
            value={body}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnSubmitClick}>Create</Button>
          <Button onClick={handleClose} color="error">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
