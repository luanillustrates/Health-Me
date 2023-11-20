import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Appointment from "../components/Appointments";

export default function Appointments() {
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
            My Appointments
          </Typography>
          <Box>
            {/* else if no appointment, return No appointments booked, Book an appointment route to Services */}
            <Appointment />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
