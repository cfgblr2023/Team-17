import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  formItem: {
    marginBottom: theme.spacing(3),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    minWidth: 120,
    maxWidth: 300,
  },
}));

function Register() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [education, setEducation] = useState('');
  const [institution, setInstitution] = useState('');
  const [working, setWorking] = useState('');
  const [interests, setInterests] = useState([]);
  const [languages, setLanguages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to submit the form data
  };

  const handleInterestChange = (event) => {
    setInterests(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguages(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3} className={classes.formContainer}>
        <Grid item xs={12} sm={6} className={classes.formItem}>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.formItem}>
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.formItem}>
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.formItem}>
          <TextField
            fullWidth
            label="Phone Number"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.formItem}>
          <TextField
            fullWidth
            label="Educational Status"
            value={education}
            onChange={(event) => setEducation(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.formItem}>
          <TextField
            fullWidth
            label="Institution"
            value={institution}
            onChange={(event) => setInstitution(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} className={classes.formItem}>
          <TextField
            fullWidth
            label="Working"
            value={working}
            onChange={(event) => setWorking(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} className={classes.formItem}>
          <FormControl className={classes.formControl}>
            <InputLabel id="interests-label">Areas of Interest</InputLabel>
            <Select
              labelId="interests-label"
              multiple
              value={interests}
              onChange={handleInterestChange}
            >
              <MenuItem value="Technology">Technology</MenuItem>
              <MenuItem value="Finance">Finance</MenuItem>
              <MenuItem value="Art">Art</MenuItem>
              <MenuItem value="Science">Science</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} className={classes.formItem}>
          <FormControl className={classes.formControl}>
            <InputLabel id="languages-label">Languages Spoken</InputLabel>
            <Select
              labelId="languages-label"
              multiple
              value={languages}
              onChange={handleLanguageChange}
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Spanish">Spanish</MenuItem>
              <MenuItem value="French">French</MenuItem>
              <MenuItem value="German">German</MenuItem>
              <MenuItem value="Chinese">Chinese</MenuItem>
                     </Select>
         </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.submitButton}
          >
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Register;