import Typography from "@mui/material/Typography";
import React from "react";
import { TodoCard } from "./TodoCard";

interface Props {
  todosTitle: string[];
  handleDelete(title: string): void;
}

export const TodoList = ({ todosTitle, handleDelete }: Props) => {
  return todosTitle.length < 1 ? (
    <Typography variant="subtitle1" gutterBottom component="div">
      Trying adding a task using the button on the app bar
    </Typography>
  ) : (
    <div>
      {todosTitle.map((t) => (
        <TodoCard todosTitle={t} handleDelete={handleDelete} />
      ))}
    </div>
  );
};
