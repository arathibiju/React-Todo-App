import Typography from "@mui/material/Typography";
import React from "react";
import { TodoCard } from "./TodoCard";

interface Props {
  todosTitle: string[];
  todosBody: string[];
  handleDelete(title: string, body: string): void;
}

export const TodoList = ({ todosTitle, todosBody, handleDelete }: Props) => {
  return todosTitle.length < 1 ? (
    <Typography variant="subtitle1" gutterBottom component="div">
      Trying adding a task using the button on the app bar
    </Typography>
  ) : (
    <div>
      {todosTitle.map((t, index) => (
        <TodoCard
          todosTitle={t}
          handleDelete={handleDelete}
          todosBody={todosBody[index]}
        />
      ))}
    </div>
  );
};
