import React from "react";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Divider from '@mui/material/Divider';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MobileStepper from "@mui/material/MobileStepper";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import ContactPhoneRoundedIcon from '@mui/icons-material/ContactPhoneRounded';


import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import lessons from "../images/Free_Lesson_Plans_Banner.png";
import k3 from "../images/K3-Come-read-with-me_revised_notice-2.png";
import spelling from "../images/Spelling_Book_K3_and_Up_Banner.png";
import textbooks from "../images/textbooks.png";
import schoolSupplies from "../images/school_supplies.png";
import officeSupplies from "../images/office_supplies.png";
import eLearning from "../images/e-learning.png";
import post1 from "../images/post_1.png";
import post2 from "../images/post_2.png";
import post3 from "../images/post_3.png";

import { CardHeader, CardMedia } from "@mui/material";
import Layout from "../components/LayoutComponent";


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Free Lesson Plans",
    imgPath: lessons,
  },
  {
    label: "K3 Come Read with me",
    imgPath: k3,
  },
  {
    label: "Spelling Book K3 and Up",
    imgPath: spelling,
  },
];

const IndexPage = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <Layout>   
      <Box sx={{ maxWidth: "100vw", flexGrow: 1 }}>      
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <Box key={step.label} sx={{ overflow: "hidden"}} >
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    display: "block",
                    maxWidth: "100vw", 
                    overflow: "hidden",
                    width: "100vw"
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </Box>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />     
      </Box>    
      <Stack spacing={4} sx={{ alignItems: "center" }}>    
          <Box sx={{ display: "flex", justifyContent: "center" }} >
            <Typography sx={{ fontSize: "2.2rem", mr: 1 }}>White Rain Publishing</Typography><Typography  sx={{ fontSize: "2.2rem", color: "#0b65a6" }}>PRODUCTS </Typography>
          </Box>
          <Divider sx={{ width: "40px", borderColor: " #95c21e", borderTopWidth: "4px" }}/>
          <Grid container px={5}>
            <Grid item xs={3} px={2}>
              <Card>
                <CardHeader title="TEXTBOOKS" />
                <CardMedia 
                  component="img"
                  image={textbooks}
                  alt="Image of text books"
                  height={200}
                  />
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
              </Card>
            </Grid>
            <Grid item xs={3} px={2}>
              <Card>
                <CardHeader title="SCHOOL SUPPLIES" />
                <CardMedia 
                  component="img"
                  image={schoolSupplies}
                  alt="Image of school items"
                  height={200}
                  />
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
              </Card>
            </Grid>
            <Grid item xs={3} px={2}>            
              <Card>
                <CardHeader title="OFFICE STATIONARY" />
                <CardMedia 
                  component="img"
                  image={officeSupplies}
                  alt="Image of office stationary"
                  height={200}
                  />
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
              </Card>
            </Grid>
            <Grid item xs={3} px={2}>          
              <Card>
                <CardHeader title="E-LEARNING" />
                <CardMedia 
                  component="img"
                  image={eLearning}
                  alt="Image of text books"
                  height={200}
                  />
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <Divider sx={{ width: "40px", borderColor: " #95c21e", borderTopWidth: "4px" }}/>
          <Grid container>
            <Grid item xs={6}>     
              <Grid container px={5} py={4}>
                <Grid item xs={4} px={1}>
                  <Card>
                    <CardMedia 
                      component="img"
                      image={post1}
                      alt="Facebook post 1"
                      height={200}
                      />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        At White Rain Publishing, our commitment to diverse narratives ...
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4} px={1}>
                  <Stack spacing={4}>
                    <Card>
                      <CardMedia 
                        component="img"
                        image={post2}
                        alt="Facebook post 2"
                        height={200}
                        />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          🎉GIVEAWAY ALERT🎉🎁
                          Comment the correct answer to the  ...
                        </Typography>
                      </CardContent>
                    </Card>
                    <Button variant="contained" sx={{ fontSize: "0.6em" }} startIcon={<FacebookIcon />}>Follow on Facebook</Button>   
                  </Stack>
                </Grid>
                <Grid item xs={4} px={1}>
                  <Card>
                    <CardMedia 
                      component="img"
                      image={post3}
                      alt="Facebook post 3"
                      height={200}
                      />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        Thrilled to have shared the invaluable content of the Let's STEM Together ...
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>     
            </Grid>
            <Grid item xs={6}  px={2}>            
              <Grid container px={5} py={4}>
                <Grid item xs={4} px={1}>
                  <Card>
                    <CardMedia 
                      component="img"
                      image={post1}
                      alt="Instagram post 1"
                      height={200}
                      />
                  </Card>
                </Grid>
                <Grid item xs={4} px={1}>
                  <Stack spacing={4}>
                    <Card>
                      <CardMedia 
                        component="img"
                        image={post2}
                        alt="Instagram post 2"
                        height={200}
                        />
                    </Card>
                    <Button variant="contained" sx={{ fontSize: "0.6em" }} startIcon={<InstagramIcon />}>Follow on Instagram</Button>          
                  </Stack>
                </Grid>
                <Grid item xs={4} px={1}>
                  <Card>
                    <CardMedia 
                      component="img"
                      image={post3}
                      alt="Instagram post 3"
                      height={200}
                      />
                  </Card>
                </Grid>
              </Grid>  
            </Grid>
          </Grid>       
      </Stack>   
      <Box sx={{ bgcolor: "#0a64a5 !important", display: "flex", width: "100%", justifyContent: "center" }}>
        <ContactPhoneRoundedIcon sx={{ width: "1.5em", height: "4.1em", color: "white"}}/>
        <Typography  sx={{ fontSize: "1.5rem", fontFamily: "sans-serif", py: 4, color: "white", px: 2 }}>
          Call Us Today For All your Kindergarten And Stationery Needs
        </Typography>
        <Typography  sx={{ fontSize: "1.5rem", fontFamily: "sans-serif", py: 4, color: "#95c21e" }}>
          (876) 908-1783
        </Typography>
      </Box>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
