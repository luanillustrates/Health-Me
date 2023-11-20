import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";

import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

export default function Appointment() {
  return (
    <Box
      sx={{
        marginTop: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* if not enough time, only keep delete button */}

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h4" component="div">
            service name
          </Typography>
          <Typography variant="h5" component="div">
            date booked
          </Typography>
          <Typography variant="h5" component="div">
            time booked
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button size="small" startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
