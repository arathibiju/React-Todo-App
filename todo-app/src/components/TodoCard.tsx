import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

interface Props {
  todosTitle: string;
  todosBody: string;
  handleDelete(title: string, body: string): void;
}

export const TodoCard = ({ todosTitle, todosBody, handleDelete }: Props) => {
  const onClick = (_event: any) => {
    handleDelete(todosTitle, todosBody);
  };
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {todosTitle}
        </Typography>
        <Typography variant="body2">{todosBody}</Typography>
      </CardContent>
      <CardActions>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Button
            size="small"
            variant="outlined"
            startIcon={<DoneOutlineIcon />}
          >
            Mark Done
          </Button>
          <Button size="small" variant="outlined" startIcon={<EditIcon />}>
            Edit
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={onClick}
          >
            Delete
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};
