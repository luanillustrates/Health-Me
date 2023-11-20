import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

export default function Profile() {
  const { loading, error, data } = useQuery(QUERY_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { user } = data;

  return (
    <Box
      sx={{
        marginTop: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
            My Profile
          </Typography>
          <TextField
            margin="normal"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            id="standard-read-only-input"
            label="Name"
            defaultValue={user.firstName + " " + user.lastName}
            variant="standard"
          />
          <TextField
            margin="normal"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            id="standard-read-only-input"
            label="Date of birth"
            defaultValue={user.dob}
            variant="standard"
          />
          <TextField
            margin="normal"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            id="standard-read-only-input"
            label="Email"
            defaultValue={user.email}
            variant="standard"
          />
          <TextField
            margin="normal"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            id="standard-read-only-input"
            label="Phone Number"
            defaultValue={user.phoneNumber}
            variant="standard"
          />
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button size="small" startIcon={<EditIcon />}>
            Edit Profile
          </Button>
          <Button size="small" startIcon={<DeleteIcon />}>
            Delete Account
          </Button>
        </CardActions>
        {/* when editing, change to these buttons */}
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button size="small" startIcon={<CheckIcon />}>
            Save
          </Button>
          <Button size="small" startIcon={<ClearIcon />}>
            Cancel
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
