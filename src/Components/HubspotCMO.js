import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
const HubspotCMO = () => {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      bgcolor="#fff"
      sx={{ "@media (max-width:425px)": { fontSize: 30 }, mb:10}}
    >
      <Grid container item xs={12} sm={3}>
        <Box
          component="img"
          src='https://www.hubspot.com/hs-fs/hubfs/Kipps%20thoughts%20on%20the%20future%20of%20AI-1.png?width=400&height=330&name=Kipps%20thoughts%20on%20the%20future%20of%20AI-1.png'
          sx={{
            width: "100%",
            flexGrow:0
          }}
        ></Box>
      </Grid>
      <Grid items xs={12} sm={9}>
        <Typography
          variant="h6"
          fontWeight="bold"
          ml={5}
        >
          HubSpots CMO on How AI Will Revolutionize Business
        </Typography>
        <Typography
          variant="body1"
          color="#2e475d"
          mt={2}
          ml={5}
          sx={{ "@media (max-width:1080px)": { fontSize: 12 } }}
        >
          HubSpot CMO Kipp Bodnar discusses his predictions for how AI will revolutionize the future of every industry.
        </Typography>
        <Button
          className="btn1"
          size="large"
          variant="contained"
          sx={{
            mt: 2,
            width: "230px",
            height: "60px",
            border: "1px solid #ff5c35",
            bgcolor: "#ff5c35",
            ml:5,
            mb:5,
            "@media (max-width:599px)": { width:"400px" },
            "@media (max-width:500px)": { width:"240px" },
            '&:hover': {
              backgroundColor: 'transparent'
            },
          }}
        >
          Read The Article
        </Button>
      </Grid>
    </Grid>
  );
};

export default HubspotCMO;
