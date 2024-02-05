import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    return (
        <Stack spacing={2} sx={{ bgcolor: "#111", alignItems: "center" }}>
            <Grid container px={18} py={4}>
            <Grid item xs={3}>
                <StaticImage src="../images/website_logo.png"  alt="White Rain Publishing Logo" />
            </Grid>
            <Grid item xs={3}>
                <Stack spacing={2}>
                <Box display={"flex"}>
                    <Typography  sx={{fontSize: "1.5rem", color: "#28eaf6", px: 1}} variant="h4">BUSINESS</Typography>
                    <Typography  sx={{fontSize: "1.5rem", color: "#eeeeee" }} variant="h4">HOURS</Typography>
                </Box>
                <Box display={"flex"}>
                    <AccessTimeIcon sx={{ color: "#28EAF6" }} />
                    <Typography  sx={{fontSize: "1rem", color: "#eeeeee", px: 1}}>Mon-Fri: 9am - 5pm</Typography>
                </Box>
                <Box display={"flex"}>
                    <AccessTimeIcon sx={{ color: "#28EAF6" }} />
                    <Typography  sx={{fontSize: "1rem", color: "#eeeeee", px: 1}}>Sat-Sun: Closed</Typography>
                </Box>
                </Stack>
            </Grid>
            <Grid item xs={3}>
                <Stack spacing={2}>
                <Box display={"flex"}>
                    <Typography  sx={{fontSize: "1.5rem", color: "#28eaf6", px: 1}} variant="h4">OUR</Typography>
                    <Typography  sx={{fontSize: "1.5rem", color: "#eeeeee" }} variant="h4">SERVICES</Typography>
                </Box>
                <Box display={"flex"}>
                    <Typography  sx={{fontSize: "1rem", color: "#eeeeee", px: 1}}>Textbooks</Typography>
                </Box>
                <Box display={"flex"}>
                    <Typography  sx={{fontSize: "1rem", color: "#eeeeee", px: 1}}>Materials</Typography>
                </Box>
                <Box display={"flex"}>
                    <Typography  sx={{fontSize: "1rem", color: "#eeeeee", px: 1}}>Charts</Typography>
                </Box>
                <Box display={"flex"}>
                    <Typography  sx={{fontSize: "1rem", color: "#eeeeee", px: 1}}>Lesson Plans</Typography>
                </Box>
                <Box display={"flex"}>
                    <Typography  sx={{fontSize: "1rem", color: "#eeeeee", px: 1}}>Online Learning Portal</Typography>
                </Box>
                </Stack>            
            </Grid>
            <Grid item xs={3}>
                <Stack spacing={2}>
                <Box display={"flex"}>
                    <Typography  sx={{fontSize: "1.5rem", color: "#28eaf6", px: 1}} variant="h4">CONTACT</Typography>
                    <Typography  sx={{fontSize: "1.5rem", color: "#eeeeee" }} variant="h4">DETAILS</Typography>              
                </Box>
                <Box display={"flex"}>
                    <PlaceIcon sx={{ color: "#28EAF6" }} />
                    <Typography  sx={{fontSize: "1rem", color: "#eeeeee", px: 1}}>12 Studio One Boulevard Kingston 5</Typography>
                </Box>
                <Box display={"flex"}>
                    <PhoneEnabledIcon sx={{ color: "#28EAF6" }} />
                    <Typography  sx={{fontSize: "1rem", color: "#eeeeee", px: 1}}>(876) 908-1783</Typography>
                </Box>
                <Box display={"flex"}>
                    <WhatsAppIcon sx={{ color: "#28EAF6" }} />
                    <Typography  sx={{fontSize: "1rem", color: "#eeeeee", px: 1}}>(876) 532-2537</Typography>
                </Box>
                <Box display={"flex"}>
                    <MailIcon sx={{ color: "#28EAF6" }} />
                    <Typography  sx={{fontSize: "1rem", color: "#eeeeee", px: 1}}>info@whiterainpublishing.com</Typography>
                </Box>
                </Stack>            
            </Grid>
            </Grid>
            <Divider sx={{ width: "80vw", borderTop: "1px solid rgba(255,255,255,0.12)" }} />      
            <Typography  sx={{ fontSize: "0.9rem", fontWeight: 100, color: "#eeeeee", px: 2, pb: 2 }}>
            Copyright © { new Date().getFullYear() } - White Rain Publishing. All rights reserved.
            </Typography>       
        </Stack> 
    )
}

export default Footer;