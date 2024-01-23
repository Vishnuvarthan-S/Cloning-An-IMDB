import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "black"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg" marginTop="10%"  >
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color:"white"}}>
            We value your feedback and input. Feel free to reach out to us with any questions, suggestions, or collaboration opportunities.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
          </Grid>
          <Grid item xs={12} sm={4}>
          <Typography variant="body2" color="text.secondary" sx={{color:"white"}}> 
            Stay connected with Watch N Review for real-time updates, behind-the-scenes content, and exclusive giveaways.Follow Us on Social Media
            </Typography >
            <Link href="https://www.facebook.com/imdb" color="inherit" sx={{color:"white"}}>
              <Facebook />
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link
              href="https://www.instagram.com/imdb/"
              color="inherit"
              sx={{color:"white"}}>
              <Instagram />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
        </Box>
      </Container>
    </Box>
  );
}