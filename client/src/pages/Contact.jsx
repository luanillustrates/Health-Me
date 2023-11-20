import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Contact() {
  return (
    <>
      <Typography variant="h1">Contact</Typography>
      <Box sx={{ width: 1, display: "flex", flexDirection: "row" }} >
        <Box>
          <Typography>Contact Us</Typography>
          <Typography>North Terrace, Adelaide SA 5000</Typography>
          <Typography>info@healthme.com</Typography>
          <Typography>(08) 8222 4705</Typography>
        </Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13085.576156382267!2d138.5915285!3d-34.9216534!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0c92d05b6adf3%3A0xb3146fda747e6572!2sAdelaide%20Medical%20School!5e0!3m2!1sen!2sau!4v1700046105170!5m2!1sen!2sau"
          width="600px"
          height="400px"
          style={{ border: "0" }}
          // allowfullscreen=""
          loading="lazy"
        ></iframe>
      </Box>
    </>
  );
}
