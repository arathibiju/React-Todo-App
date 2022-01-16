import React from "react";
import { TodoCard } from "./TodoCard";

interface Props {
  todosTitle: string[];
  handleDelete(title: string): void;
}

export const TodoList = ({ todosTitle, handleDelete }: Props) => {
  return todosTitle.length < 1 ? (
    <>No Todo Items</>
  ) : (
    <div>
      {todosTitle.map((t) => (
        <TodoCard todosTitle={t} handleDelete={handleDelete} />
      ))}
    </div>
  );
};
