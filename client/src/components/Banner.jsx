import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Link as RouterLink } from "react-router-dom";
import doctorBanner from "../assets/images/doctor-banner.jpg";

export default function MediaCard() {
  return (
    <Box sx={{ position: "relative" }}>
      <CardMedia
        position="relative"
        component="img"
        src={doctorBanner}
        sx={{ height: "80vh", objectFit: "cover", objectPosition: "0 5%" }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          textAlign: "center",
          width: "100vh",
          color: "white",
          padding: "10px",
          textShadow: "5px 5px 50px grey",
        }}
      >
        <Typography variant="h1">Health Me</Typography>
        <Typography variant="body1">
          A one-stop shop to get your health needs met.
        </Typography>
        <CardActions>
          <Button size="large" component={RouterLink} to="/services">
            Book an appointment
          </Button>
        </CardActions>
      </Box>
    </Box>
  );
}
