import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Contact() {
  const [type, setType] = React.useState("disc");
  return (
    <>
      <Container
        sx={{
          width: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h1">Contact</Typography>
        <Box
          sx={{
            width: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Box sx={{ mr: 5 }}>
            <Box>
              <Typography variant="h5">Contact Us</Typography>
              <Typography sx={{ mt: 2 }}>
                North Terrace, Adelaide SA 5000
              </Typography>
              <Typography>info@healthme.com</Typography>
              <Typography>(08) 8222 4705</Typography>
            </Box>
            <Box sx={{ mt: 5 }}>
              <Typography variant="h5">Opening hours</Typography>
              <Typography sx={{ mt: 2 }}>Mon - Fri, 9 am - 4.30 pm</Typography>
              <Typography>Sat - Sun, closed</Typography>
            </Box>
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
      </Container>
    </>
  );
}
