import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { PatternFormat } from "react-number-format";

import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="">
        Health Me
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const DEFAULT_SIGNUP_FORM = {
  //change all to null when done
  firstName: null,
  lastName: null,
  email: null,
  dob: null,
  phoneNumber: null,
  password: null,
};

export default function SignUp() {
  const [signUpForm, setSignUpForm] = React.useState(DEFAULT_SIGNUP_FORM);

  function handleOnChange(e) {
    e.preventDefault();

    setSignUpForm((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }

  // validates each input
  function isValid() {
    return (
      signUpForm.firstName != null &&
      signUpForm.firstName.trim().length > 0 &&
      signUpForm.lastName != null &&
      signUpForm.lastName.trim().length > 0 &&
      signUpForm.email != null &&
      signUpForm.email.trim().length > 0 &&
      signUpForm.dob != null &&
      signUpForm.dob.trim().length > 0 &&
      signUpForm.phoneNumber != null &&
      signUpForm.phoneNumber.trim().length > 0 &&
      signUpForm.password != null &&
      signUpForm.password.trim().length > 0
    );
  }

  // function to handle create user
  async function handleSubmit(e) {
    const [addUser] = useMutation(ADD_USER);

    e.preventDefault();

    if (isValid()) {
      const mutationResponse = await addUser({
        variables: signUpForm,
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
      return;
    }

    alert("Something went wrong");
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <AddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="given-name"
                value={signUpForm.firstName}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                value={signUpForm.lastName}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                type="email"
                value={signUpForm.email}
                onChange={handleOnChange}
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="dob"
                label="Date of Birth "
                name="dob"
                autoComplete="date-of-birth"
                placeholder="DD/MM/YYYY"
                inputProps={{ maxLength: 8 }}
                value={signUpForm.dob}
                onChange={handleOnChange}
              />
            </Grid> */}
            <Grid item xs={12} sm={6}>
              <PatternFormat
                required
                fullWidth
                id="dob"
                label="Date of Birth "
                name="dob"
                autoComplete="date-of-birth"
                placeholder="DD/MM/YYYY"
                customInput={TextField}
                type="tel"
                format="##/##/####"
                value={signUpForm.dob}
                onChange={handleOnChange}
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
                autoComplete="phone-number"
                type="tel"
                inputProps={{ maxLength: 10 }}
                value={signUpForm.phoneNumber}
                onChange={handleOnChange}
              />
            </Grid> */}
            <Grid item xs={12} sm={6}>
              <PatternFormat
                required
                fullWidth
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
                autoComplete="phone-number"
                customInput={TextField}
                type="tel"
                format="#### ### ###"
                value={signUpForm.phoneNumber}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={signUpForm.password}
                onChange={handleOnChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, py: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ mt: 2 }} />
    </Container>
  );
}
