import React from 'react';
import MenteeNav from './MenteeNav';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Typography, Box, Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import MenteeCalender from './MenteeCalender';


const courseInfo = {
  courseName: 'Introduction to React',
  mentorName: 'John Doe',
  courseInfo: 'Learn the basics of React.js',
  progress: 50,
};

const useStyles = makeStyles((theme) => ({
    box: {
      margin: "40px",
    }
  }));

function Mentee() {
    const classes = useStyles();
  return (
    <div>
    <MenteeNav />
   
    <MenteeCalender/>

    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Box bgcolor="background.paper" p={2} m={2} className={classes.box}>
         
          <Box m={2}>
            <Typography variant="h4" align="left">My Course</Typography>
            <Typography variant="body1" align="left">Course: {courseInfo.courseName}</Typography>
            <Typography variant="body1" align="left">Mentor: {courseInfo.mentorName}</Typography>
            <Typography variant="body1" align="left">Info: {courseInfo.courseInfo}</Typography>
            <LinearProgress variant="determinate" value={courseInfo.progress} />
            <Typography variant="body1" align="left">Progress: {courseInfo.progress}%</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box bgcolor="background.paper" p={2} m={2} className={classes.box}>
          <Typography variant="h4" align="left">Second column</Typography>
          <Typography variant="body1" align="left">This is the second column.</Typography>
        </Box>
      </Grid>
    </Grid>
    
    </div>
  );
}

export default Mentee;