import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ReactElement, useState } from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";

interface Props {
  addTodo(title: string): void;
}

export const TodoForm = ({ addTodo }: Props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [title, setTitle] = useState<string>("");

  const handleOnChange = (event: any) => {
    setTitle(event.target.value);
  };

  const handleOnSubmitClick = (event: any) => {
    event.preventDefault();
    if (title?.trim()) {
      addTodo(title);
    }
  };
  return (
    <div>
      <Button
        color="inherit"
        onClick={handleClickOpen}
        endIcon={<AddTaskIcon />}
      >
        Add New Todo
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
            autoFocus
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
          <Button onClick={handleClose}>Create</Button>
          <Button onClick={handleOnSubmitClick} color="error">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
