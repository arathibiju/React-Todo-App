import { Box, Grid } from "@mui/material";
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
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {todosTitle.map((t, index) => (
          <Grid item xs={2} sm={4} md={4}>
            <TodoCard
              todosTitle={t}
              handleDelete={handleDelete}
              todosBody={todosBody[index]}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
