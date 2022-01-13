import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Time Added
        </Typography>
        <Typography variant="h5" component="div">
          Title of Todo
        </Typography>
        <Typography variant="body2">
          well meaning and kindlyscing bibendum est ultricies integer quis.
          Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque
          felis imperdiet proin fermentum leo. Mauris com.
        </Typography>
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
          >
            Delete
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
