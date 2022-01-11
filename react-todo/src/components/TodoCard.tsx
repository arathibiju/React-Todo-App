import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

interface Props {
  title: string;
  time: string;
  todoText: string;
}

export default function SimpleCard({
  title,
  time,
  todoText,
}: Props): ReactElement {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <CardContent>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {time}
            </Typography>
            <Typography variant="body2" component="p">
              {todoText}
            </Typography>
          </CardContent>
        </Grid>
        <CardActions>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-end"
          >
            <Grid item>
              <Button size="small" aria-label="show more" color="primary">
                View
              </Button>
            </Grid>
            <Grid item>
              <Button size="small" aria-label="edit todo card" color="primary">
                Edit
              </Button>
            </Grid>
            <Grid item>
              <Button size="small" aria-label="delete" color="secondary">
                Delete
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Grid>
    </Card>
  );
}
