import React, { useState } from "react";
import "../Components/Coordinator.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import logo from "../Images/logo.png";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  LinearProgress,
  TableContainer,
} from "@material-ui/core";

const staticJsonData = [
  {
    mentor: "John Doe",
    mentee: "Jane Smith",
    courses: "Web Development",
    progress: 80,
    ratings: 5, // Updated field name and converted feedback to ratings
  },
  {
    mentor: "Alice Johnson",
    mentee: "Bob Williams",
    courses: "Data Science",
    progress: 60,
    ratings: 4, // Updated field name and converted feedback to ratings
  },
  {
    mentor: "John Doe",
    mentee: "Michael",
    courses: "Data Science",
    progress: 78,
    ratings: 7, // Updated field name and converted feedback to ratings
  },
  {
    mentor: "John Doe",
    mentee: "James",
    courses: "Data Science",
    progress: 60,
    ratings: 4, // Updated field name and converted feedback to ratings
  },
  {
    mentor: "Alice Johnson",
    mentee: "Harray",
    courses: "Data Science",
    progress: 43,
    ratings: 6, // Updated field name and converted feedback to ratings
  },
  {
    mentor: "John Doe",
    mentee: "William",
    courses: "Data Science",
    progress: 79,
    ratings: 6, // Updated field name and converted feedback to ratings
  },
  {
    mentor: "Alice Johnson",
    mentee: "Joe",
    courses: "Data Science",
    progress: 60,
    ratings: 4, // Updated field name and converted feedback to ratings
  },
  {
    mentor: "John Doe",
    mentee: "Ronald",
    courses: "Data Science",
    progress: 40,
    ratings: 4, // Updated field name and converted feedback to ratings
  },
  {
    mentor: "Alice Johnson",
    mentee: "Bob Williams",
    courses: "Data Science",
    progress: 55,
    ratings: 2, // Updated field name and converted feedback to ratings
  },
];

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
function getStarRating(ratings) {
  const starCount = 5; // Maximum star count
  const filledStar = "★";
  const emptyStar = "☆";
  const filledStars = filledStar.repeat(ratings);
  const emptyStars = emptyStar.repeat(Math.abs(starCount - ratings));
  return filledStars + emptyStars;
}
function Coordinator() {
  const skillsList = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    // Add more skills as needed
  ];
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("software development");
  const [module1, setModule1] = useState("module1 content");
  const [module2, setModule2] = useState("module2 content");
  const [module3, setModule3] = useState("module3 content");
  const [module4, setModule4] = useState("module4 content");
  const [duration, setDuration] = useState("2");
  const [skills, setSkills] = useState([]);
  const [openSkill, setOpenSkill] = useState(false);

  const handleSkillsPopup = () => {
    setOpenSkill(true);
  };

  const handleSkillsChange = (skill) => (event) => {
    if (event.target.checked) {
      setSkills((prevSkills) => [...prevSkills, skill]);
    } else {
      setSkills((prevSkills) =>
        prevSkills.filter((selectedSkill) => selectedSkill !== skill)
      );
    }
  };

  const handleCloseSkill = () => {
    setOpenSkill(false);
  };

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

  return (
    <div>
      <div className="navbar">
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <img className={classes.logo} src={logo} alt="Logo" />
            <Typography
              variant="h6"
              className={classes.title}
              style={{ color: "#E0B207" }}
            >
              Coordinator Dashboard
            </Typography>
            <Button variant="text" className={classes.menuItem}>
              Help
            </Button>
            <Button
              variant="text"
              className={classes.menuItem}
              onClick={handleClickOpen}
            >
              Add Courses
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
            Add Course
          </DialogTitle>
          <DialogContent>
            <DialogContentText style={{ textAlign: "center" }}>
              Add Course
            </DialogContentText>
            <form className={classes.form} noValidate>
              <TextField
                autoFocus
                margin="dense"
                id="title"
                label="Title"
                type="text"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                margin="dense"
                id="duration"
                label="Duration"
                type="number"
                fullWidth
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="module1"
                label="Module1"
                type="text"
                fullWidth
                value={module1}
                onChange={(e) => setModule1(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="module2"
                label="Module2"
                type="text"
                fullWidth
                value={module2}
                onChange={(e) => setModule2(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="module3"
                label="Module3"
                type="text"
                fullWidth
                value={module3}
                onChange={(e) => setModule3(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="module4"
                label="Module4"
                type="text"
                fullWidth
                value={module4}
                onChange={(e) => setModule4(e.target.value)}
              />
              <Button variant="contained" onClick={handleSkillsPopup}>
                Select Skills
              </Button>
            </form>
          </DialogContent>
          <Dialog open={openSkill} onClose={handleCloseSkill}>
            <DialogContent>
              <DialogContentText>Select the skills:</DialogContentText>
              {skillsList.map((skill) => (
                <FormControlLabel
                  key={skill}
                  control={
                    <Checkbox
                      checked={skills.includes(skill)}
                      onChange={handleSkillsChange(skill)}
                      color="primary"
                    />
                  }
                  label={skill}
                />
              ))}
            </DialogContent>
            <Button onClick={handleCloseSkill}>Done</Button>
          </Dialog>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div className="table">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Mentor</TableCell>
                <TableCell>Mentee</TableCell>
                <TableCell>Courses</TableCell>
                <TableCell>Progress</TableCell>
                <TableCell>Ratings</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {staticJsonData.map((data, index) => (
                <TableRow key={index}>
                  <TableCell>{data.mentor}</TableCell>
                  <TableCell>{data.mentee}</TableCell>
                  <TableCell>{data.courses}</TableCell>
                  <TableCell>
                    <LinearProgress
                      variant="determinate"
                      value={data.progress}
                    />
                  </TableCell>
                  <TableCell>
                    {getStarRating(data.ratings)}{" "}
                    {/* Call a helper function to convert ratings to stars */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Coordinator;
