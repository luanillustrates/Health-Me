import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function LoginSignupCard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card
      sx={{
        p: 2,
        margin: "auto",
        mt: 8,
        maxWidth: 500,
        flexGrow: 1,
      }}
    >
      <AppBar
        position="static"
        style={{
          background: "transparent",
          boxShadow: "none",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          centered
        >
          <Tab label="Login" />
          <Tab label="Signup" />
        </Tabs>
      </AppBar>
      <CardContent>
        <Box hidden={value !== 0}>
          <Typography component="div">
            <LoginForm />
          </Typography>
        </Box>
        <Box hidden={value !== 1}>
          <Typography component="div">
            <SignupForm />
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
