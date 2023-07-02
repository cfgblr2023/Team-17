import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import logo from "../Images/logo.png";
import homepage from "../Images/homepage.png";
import "./Home.css";
import YouTube from "react-youtube";
import SocialIcon from "./Socialcon";

const videoId = "aazCgqqWeAQ";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#fff",
    height: "90px",
  },
  logo: {
    marginRight: theme.spacing(2),
    height: "70px",
    width: "200px",
  },
  toolbar: {
    height: 64, // set the height of the toolbar
  },
  title: {
    flexGrow: 1,
  },
  background: {
    backgroundImage: `url("../Images/homebg.png")`, // set the background image
    backgroundSize: "cover",
    height: "100vh",
  },
  loginButton: {
    marginRight: theme.spacing(2),
    color: "#E0B207", // add margin to the right of the login button
  },
  signUpButton: {
    padding: "8px 16px",
    backgroundColor: "#E0B207", // add padding to the sign up button
  },
  img: {
    height: "230px",
    width: "300px",
    marginTop: theme.spacing(4),
  },
  para: {
    margin: theme.spacing(5),
    font: "arial",
  },
}));

function Home() {
  const classes = useStyles();

  const handleLoginClick = () => {
    window.location.href = "/login";
  };

  const handleRegisterClick = () => {
    window.location.href = "/register";
  };

  const handlefbclick = () => {
    window.location.href =
      "https://www.facebook.com/CanasuDreamFoundation/?modal=admin_todo_tour";
  };
  const handleinstagramclick = () => {
    window.location.href = "https://www.instagram.com/canasudreamfoundation/";
  };
  const handleClick = () => {
    window.location.href = "http://127.0.0.1:5500/chatbot/cfg_test1.html";
  };

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <img className={classes.logo} src={logo} alt="Logo" />
            <Typography variant="h6" className={classes.title}>
              My Website
            </Typography>
            <Button
              onClick={handleClick}
              className={classes.loginButton}
              variant="outlined"
            >
              Chatbot
            </Button>
            <Button
              variant="outlined"
              className={classes.loginButton}
              onClick={handleLoginClick}
            >
              Login
            </Button>
            <Button
              variant="outlined"
              className={classes.signUpButton}
              onClick={handleRegisterClick}
            >
              Sign up
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <img className="imagee" src={homepage}></img>

      {/* {<div className={classes.background}>
        <img src={homepage} className={classes.
          img}/>
        <p className={classes.para}>Our volunteer program aims to connect experienced professionals with under-resourced degree women students who may be facing challenges in their job search or career planning.

As a volunteer, you will help these students develop the soft and core skills they need to succeed in their chosen fields.</p>
      </div> } */}
      <div className="youtubee">
        <YouTube videoId={videoId} />
      </div>
      <SocialIcon />
      <div>
        <p>Telephone number: 8970000808 </p>
        <p>Email Address: contact@canasu.org </p>
      </div>
    </div>
  );
}

export default Home;
