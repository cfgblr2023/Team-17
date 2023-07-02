import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@material-ui/core";

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
  toolbar: {
    height: 64, // set the height of the toolbar
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuItem: {
    marginRight: theme.spacing(2),
    backgroundColor: "#E0B207",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",
  },
}));

function MentorNavbar({ mentorName }) {
  const navigate = useNavigate();
  const classes = useStyles();
  const [user, setUser] = useState();
  const styles = useStyles();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  useEffect(() => {
    let user = localStorage.getItem("user");
    if (!user) navigate("/");

    user = JSON.parse(user).user;
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={styles.toolbar}>
          <Link to={"/"}>
            <img className={classes.logo} src={logo} alt="Logo" />
          </Link>
          <Typography
            variant="h6"
            className={classes.title}
            style={{ marginLeft: "24px" }}
          >
            My Website
          </Typography>
          <Typography
            variant="h6"
            className={classes.mentorName}
            style={{ marginLeft: "24px" }}
          >
            {/* {mentorName} */}
          </Typography>
          <Box>
            <Button
              variant="contained"
              className={classes.menuItem}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MentorNavbar;
