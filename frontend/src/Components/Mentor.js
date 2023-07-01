import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import MentorNav from './MentorNav';
import MenteeCalender from './MenteeCalender';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  heading: {
    marginBottom: theme.spacing(3),
  },
  videoContainer: {
    position: 'relative',
    paddingBottom: '56.25%',
    paddingTop: theme.spacing(3),
    height: 0,
    overflow: 'hidden',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
  },
}));

function Mentor() {
  const classes = useStyles();
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoToggle = (event) => {
    setShowVideo(event.target.checked);
  };

  return (
    <div>
      <MentorNav />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" className={classes.heading}>
              You are assigned to xyz mentee
            </Typography>
            <Typography variant="body1">
              Do you want training videos for the course?
              <Switch
                checked={showVideo}
                onChange={handleVideoToggle}
                color="primary"
                name="showVideoToggle"
              />
            </Typography>
          </Grid>
          {showVideo && (
            <Grid item xs={12}>
              <Paper className={classes.videoContainer}>
                <iframe 
                  className={classes.video}
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="Training Video" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen
                ></iframe>
              </Paper>
            </Grid>
          )}
        </Grid>
        <Typography variant="h5" className={classes.heading} style={{marginTop: '20px'}}>
            My Schedule
        </Typography>
        <MenteeCalender/>
      </div>
    </div>
  );
}

export default Mentor;