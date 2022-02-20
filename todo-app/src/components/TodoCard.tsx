import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TodoEditDialog from "./TodoEdit";

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
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {todosTitle}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          {todosBody}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" color="error" onClick={onClick}>
          Delete
        </Button>
        <TodoEditDialog />
      </CardActions>
    </Card>
  );
};
