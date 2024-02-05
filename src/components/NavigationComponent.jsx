import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import WifiCalling3TwoToneIcon from "@mui/icons-material/WifiCalling3TwoTone";
import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";
import MenuItem from "./MenuItem";
import ProductMenuItem from "./ProductMenuItem";

export const Navigation = () => {
  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#fff", pb: 3 }}>
        <Toolbar disableGutters sx={{ alignItems: "flex-start" }}>
          <Stack spacing={5} sx={{ width: "100vw" }}>
            <Box sx={{ bgcolor: "#3c85fb", maxWidth: "100vw", flexGrow: 1, display: { xs: "none", md: "flex" }}} >
              <Grid container>
                <Grid item xs={2} />
                <Grid item xs={2}>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ my: 1, fontSize: "0.8rem" }}>
                      TEACHER LOGIN
                    </Typography>
                    <Typography sx={{ my: 0.5, px: 1 }}>|</Typography>
                    <Button variant="contained" sx={{ color: "red", bgcolor: "white", fontSize: "0.8rem", fontWeight: "bold" }}>
                      REGISTER
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={5}>
                  <Box sx={{ display: "flex" }}>
                    <WifiCalling3TwoToneIcon sx={{ my: 0.5, mx: 0.5, color: "#28EAF6" }} />
                    <Typography sx={{ my: 1, mr: 3, fontSize: "0.8rem" }}>CALL TODAY: (876) 908-1783</Typography>
                    <AccessTimeTwoToneIcon sx={{ my: 0.5, mx: 0.5, color: "#28EAF6" }} />
                    <Typography sx={{ my: 1, fontSize: "0.8rem" }}>MON-FRI: 9AM-5PM | SAT-SUN: CLOSED</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Grid container>
              <Grid item xs={2} md={2}></Grid>
              <Grid item xs={7} md={2}>
                <StaticImage
                  src="../images/website_logo.png"
                  alt="White Rain Publishing Logo" />
              </Grid>
              <Grid item xs={2} md={7}>
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <MenuItem link="/" text="HOME" leftMargin={20} />
                  <MenuItem link="/about" text="ABOUT US" leftMargin={2} />
                  <MenuItem link="/mission" text="OUR MISSION" leftMargin={2} />
                  <MenuItem link="/contact" text="CONTACT US" leftMargin={2} />
                  <MenuItem link="/free-material" text="FREE MATERIALS" leftMargin={2} />
                </Box>
              </Grid>
              <Grid item xs={1} md={1}>
                <Box sx={{ mr: 12, mt: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton color="primary" aria-label="open drawer" edge="end">
                    <MenuIcon />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box sx={{ bgcolor: "#424242", maxWidth: "100vw", flexGrow: 1, display: "flex" }}>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={1}>
            <ProductMenuItem link="#" text="Pre-K Books" textColor="white"/>
          </Grid>
          <Grid item xs={1}>
            <ProductMenuItem link="#" text="K1 Books" textColor="white"/>
          </Grid>
          <Grid item xs={1}>
            <ProductMenuItem link="#" text="K2 Books" textColor="white"/>
          </Grid>
          <Grid item xs={1}>
            <ProductMenuItem link="/product-category/textbooks/k3-textbooks" text="K3 Books" textColor="white"/>
          </Grid>
          <Grid item xs={2}>
            <ProductMenuItem link="#" text="FREE LESSON PLANS" textColor="#28EBF6"/>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Navigation;