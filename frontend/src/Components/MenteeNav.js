import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import logo from "../Images/logo.png";
import homepage from "../Images/homepage.png";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import { Link, useNavigate } from "react-router-dom";

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

function MenteeNav() {
  const navigate = useNavigate();
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [age, setAge] = useState("25");
  const [interests, setInterests] = useState("Programming, Photography");
  const [mentor, setMentor] = useState("Jane Smith");
  const [ticketOpen, setTicketOpen] = useState(false);

  const handleEdit = () => {
    setOpen(true);
  };

  const handleSave = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleTicketOpen = () => {
    setTicketOpen(true);
  };
  const handleTicketClose = () => {
    setTicketOpen(false);
  };

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Link to={"/"}>
            <img className={classes.logo} src={logo} alt="Logo" />
          </Link>
          <Typography variant="h6" className={classes.title}>
            My Website
          </Typography>
          <Button variant="text" className={classes.menuItem}>
            Forum
          </Button>
          <Button variant="text" className={classes.menuItem}>
            Help
          </Button>
          <Button
            variant="text"
            className={classes.menuItem}
            onClick={handleClickOpen}
          >
            My Profile
          </Button>
          <Button
            variant="text"
            className={classes.menuItem}
            onClick={handleTicketOpen}
          >
            Raise Ticket
          </Button>
          <Button
            variant="text"
            className={classes.menuItem}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        PaperProps={{
          style: {
            minWidth: 500, // set the desired width here
          },
        }}
      >
        <DialogTitle id="form-dialog-title" style={{ textAlign: "center" }}>
          My Profile
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{ textAlign: "center" }}>
            Edit your details here
          </DialogContentText>
          <form className={classes.form} noValidate>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="dense"
              id="age"
              label="Age"
              type="number"
              fullWidth
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <TextField
              margin="dense"
              id="interests"
              label="Areas of Interest"
              type="text"
              fullWidth
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
            />
            <TextField
              margin="dense"
              id="mentor"
              label="Assigned Mentor"
              type="text"
              fullWidth
              value={mentor}
              InputProps={{ readOnly: true }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={ticketOpen}
        onClose={handleTicketClose}
        aria-labelledby="form-dialog-title"
        PaperProps={{
          style: {
            minWidth: 500, // set the desired width here
          },
        }}
      >
        <DialogTitle id="form-dialog-title" style={{ textAlign: "center" }}>
          Raise a Ticket
        </DialogTitle>
        <DialogContent>
          {/* Rest of the ticket dialog content */}
          <DialogContentText>
            Do you want to reassign your mentor? If yes, please enter the
            reason:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="mentor-reassign-reason"
            label="Reason for reassignment"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleTicketClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleTicketClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MenteeNav;
