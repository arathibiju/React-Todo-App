import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    textAlign: "center",
  },
  todoMain: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  todoCard: {
    border: "1px",
    borderStyle: "dashed",
    height: "50vh",
    width: "50vh",
    borderRadius: "20px",
  },
});

interface Props {}

export default function Todo(props: Props): ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.todoMain}>
      <h2 className={classes.header}>Voice-based Todo Application</h2>
      <div className={classes.todoCard}></div>
    </div>
  );
}
