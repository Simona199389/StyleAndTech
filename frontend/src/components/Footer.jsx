import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import "./Footer.css";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Ecommerce app
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer({ description, title }) {
  const links = [
    { name: "Instagram", url: "https://www.instagram.com/sk.simona63/" },
    { name: "Facebook", url: "https://www.facebook.com/S.Simeonova77/" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/simona-simeonova-9263941b6/" }
  ];

  return (
    <Box
      className="footer"
      component="footer"
      sx={{
        bgcolor: "#9c27b0",
        py: 2,
        mt: "auto", // Ensures it is pushed to the bottom
        textAlign: "center"
      }}
    >
      <Container>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {description}
        </Typography>
        <Copyright />
      </Container>

      <Container sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
        {links.map((link, key) => (
          <Typography
            key={key}
            variant="subtitle1"
            sx={{ cursor: "pointer", mx: 2 }}
            color="text.secondary"
            component="a"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </Typography>
        ))}
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
