import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../Images/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#fff",
    height: "80px",
  },
  logo: {
    marginRight: theme.spacing(2),
    height: "70px",
    width: "180px",
  },
  mentorName: {
    marginRight: theme.spacing(2),
  },
}));

function MentorNavbar({ mentorName }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <img className={classes.logo} src={logo} alt="Logo" />
          <Typography variant="h6" className={classes.title}>
            My Website
          </Typography>
          <Typography variant="h6" className={classes.mentorName}>
            {/* {mentorName} */}
            Name
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MentorNavbar;