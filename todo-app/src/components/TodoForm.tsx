import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ReactElement } from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";

interface Props {}

export default function TodoForm({}: Props): ReactElement {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            id="standard-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            variant="standard"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Create</Button>
          <Button onClick={handleClose} color="error">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
