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
import { PatternFormat } from "react-number-format";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import { UPDATE_USER } from "../utils/mutations";
import { REMOVE_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";

export default function Profile() {
  const [editMode, setEditMode] = React.useState(false);
  const [editProfile, setEditProfile] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    phoneNumber: "",
  });

  const [updateUser] = useMutation(UPDATE_USER);
  const [removeUser] = useMutation(REMOVE_USER);
  const { loading, error, data } = useQuery(QUERY_USER);

  // Handle loading state
  if (loading) return <p>Loading...</p>;

  // Handle error state
  if (error) return <p>Error: {error.message}</p>;

  // Check if data and user are defined
  if (!data || !data.user) {
    return <p>User data not available.</p>;
  }

  const { user } = data;

  const handleEdit = () => {
    setEditProfile({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      dob: user.dob,
      phoneNumber: user.phoneNumber,
    });
    setEditMode(true);

    // Change readOnly to false for all TextField components
    document.querySelectorAll(".editable-field").forEach((element) => {
      element.readOnly = false;
    });
  };

  const handleSaveUpdate = async (event) => {
    try {
      const variablesToSend = {
        id: user._id,
        firstName: editProfile.firstName,
        lastName: editProfile.lastName,
        dob: editProfile.dob,
        email: editProfile.email,
        phoneNumber: editProfile.phoneNumber,
      };
      console.log("Variables being sent to server:", variablesToSend);

      await updateUser({
        variables: variablesToSend,
      });

      alert("Profile updated successfully");
    } catch (err) {
      console.error(err);
    }
    setEditMode(false);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
  };

  const handleUpdate = (event) => {
    console.log("handleUpdate called with event:", event);
    const { name, value } = event.target;
    setEditProfile((prevEditProfile) => {
      const updatedProfile = { ...prevEditProfile, [name]: value };
      console.log("Updated Profile:", updatedProfile);
      return updatedProfile;
    });
  };

  const handleUpdatePattern = (name, values) => {
    setEditProfile((prevEditProfile) => {
      const updatedProfile = { ...prevEditProfile, [name]: values.value };
      console.log("Updated Profile:", updatedProfile);
      return updatedProfile;
    });
  };

  const handleDeleteAccount = async () => {
    try {
      const { data } = await removeUser({
        variables: { id: user._id },
      });

      if (data.removeUser) {
        // User deleted successfully, you may want to redirect or perform other actions
        alert("Account deleted successfully");
      } else {
        // Handle the case where the user wasn't deleted
        alert("Failed to delete account");
      }
    } catch (error) {
      console.error(error);
    }
  };

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
            className="editable-field"
            InputProps={{
              readOnly: !editMode,
            }}
            id="firstName"
            label="First Name"
            value={editProfile.firstName}
            variant="standard"
            onChange={handleUpdate}
          />
          <TextField
            margin="normal"
            fullWidth
            className="editable-field"
            InputProps={{
              readOnly: !editMode,
            }}
            id="lastName"
            label="Last Name"
            value={editProfile.lastName}
            variant="standard"
            onChange={handleUpdate}
          />
          <PatternFormat
            margin="normal"
            fullWidth
            className="editable-field"
            InputProps={{
              readOnly: !editMode,
            }}
            id="dob"
            label="Date of Birth"
            value={editProfile.dob}
            variant="standard"
            customInput={TextField}
            type="tel"
            format="##/##/####"
            onValueChange={(values) => {
              handleUpdatePattern("dob", values);
            }}
          />
          <TextField
            margin="normal"
            fullWidth
            className="editable-field"
            InputProps={{
              readOnly: !editMode,
            }}
            id="email"
            label="Email"
            value={editProfile.email}
            variant="standard"
            onChange={handleUpdate}
          />
          <PatternFormat
            margin="normal"
            fullWidth
            className="editable-field"
            InputProps={{
              readOnly: !editMode,
            }}
            id="phoneNumber"
            label="Phone Number"
            value={editProfile.phoneNumber}
            variant="standard"
            customInput={TextField}
            type="tel"
            format="#### ### ###"
            onValueChange={(values) => {
              handleUpdatePattern("phoneNumber", values);
            }}
          />
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          {!editMode ? (
            <>
              <Button
                size="small"
                startIcon={<EditIcon />}
                onClick={handleEdit}
              >
                Edit Profile
              </Button>
              <Button
                size="small"
                startIcon={<DeleteIcon />}
                onClick={handleDeleteAccount}
              >
                Delete Account
              </Button>
            </>
          ) : (
            <>
              <Button
                size="small"
                startIcon={<CheckIcon />}
                onClick={handleSaveUpdate}
              >
                Save
              </Button>
              <Button
                size="small"
                startIcon={<ClearIcon />}
                onClick={handleCancelEdit}
              >
                Cancel
              </Button>
            </>
          )}
        </CardActions>
      </Card>
    </Box>
  );
}
