import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import img from "../images/hubspot.webp";
const Header = () => {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      bgcolor="#fef4ea"
      sx={{ "@media (max-width:425px)": { fontSize: 30 },}}
    >
      <Grid items xs={12} sm={6} alignContent="center" mt={10} mb={5}>
        <Typography
          variant="h2"
          color="#2e475d"
          ml={10}
          sx={{
            "@media (max-width:950px)": { fontSize:"50px" },
            "@media (max-width:950px)": { fontSize:"40px" },
          }}
        >
          Grow better with HubSpot
        </Typography>
        <Typography
          variant="body1"
          color="#2e475d"
          mt={2}
          ml={10}
          mr={10}
          sx={{ "@media (max-width:1080px)": { fontSize: 12 } }}
        >
          Software that's powerful, not overpowering. Seamlessly connect your
          data, teams, and customers on one CRM platform that grows with your
          business.
        </Typography>
        <Button
          className="btn1"
          size="large"
          variant="contained"
          sx={{
            mt: 2,
            ml: 10,
            width: "230px",
            height: "60px",
            border: "1px solid #ff5c35",
            bgcolor: "#ff5c35",
            "@media (max-width:599px)": { width:"400px" },
            "@media (max-width:500px)": { width:"240px" },
            '&:hover': {
              backgroundColor: 'transparent'
            },
          }}
        >
          Get a demo
        </Button>
        <Button
          className="btn2"
          size="large"
          variant="contained"
          sx={{
            mt: 2,
            width: "230px",
            height: "60px",
            border: "1px solid #ff5c35",
            bgcolor: "#fff",
            color: "#ff5c35",
            ml: 5,
            "@media (max-width:1200px)": { ml: 10 },
            "@media (max-width:599px)": { width:"400px" },
            "@media (max-width:500px)": { width:"240px" },
            '&:hover': {
              backgroundColor: 'transparent'
            },
          }}
        >
          Get Started Free
        </Button>
        <Typography
          variant="body2"
          color="#2e475d"
          mt={2}
          ml={10}
          sx={{ "@media (max-width:1080px)": { fontSize: 12 },"@media (max-width:450px)": { fontSize: 10, mr: 10 },   }}
        >
          Get a demo of our premium software, or get started with free tools.
        </Typography>
      </Grid>
      <Grid container item xs={12} sm={6} justifyContent="center">
        <Box
          component="img"
          src={img}
          sx={{
            width: "100%",
            mb:8,
            mt:15,
            "@media (max-width:599px)": {mt:2, ml:2},
          }}
        ></Box>
      </Grid>
    </Grid>
  );
};

export default Header;
