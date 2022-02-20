import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { TextField } from "@mui/material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TodoEditDialog() {
  const [open, setOpen] = React.useState(false);
  const [titleError, setTitleError] = React.useState<boolean>(false);
  const [titleErrorText, setTitleErrorText] = React.useState<string>("");
  const [title, setTitle] = React.useState<string>("");
  const [body, setBody] = React.useState<string>("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleOnBodyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBody(event.target.value);
  };

  return (
    <div>
      <Button variant="outlined" size="small" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Edit Todo
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
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
      </Dialog>
    </div>
  );
}
