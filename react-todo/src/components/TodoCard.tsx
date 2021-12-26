import React from "react";
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

export default function SimpleCard() {
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
              Title
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Time added
            </Typography>
            <Typography variant="body2" component="p">
              Text that is inside the todo.
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
