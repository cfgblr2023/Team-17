import React, { useState} from 'react';
// import "./App.css";
import {Checkbox, Grid,Paper} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import {Avatar,TextField} from '@mui/material';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import "./Register.css";
const languages=[ 
    {language:"english",language:"hindi",language:"telugu",language:"kannada"},    
];

const skills=[
    {name:"React js",name:"Node js",name:"Data Science",name:"App dev"}
];
 

function Register(){
    const paperStyle={padding:20,height:'70vh',width:280,margin:"20px auto"}
    const avatarStyle={backgroundColor:'yellow'}
    const handleChange = (event)=>{
        setChecked(event.target.checked);
    };
    const [checked,setChecked]=React.useState([true,false]);

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}><LockIcon/></Avatar>
                <h2>Sign In</h2>
                
                </Grid>
               
               <TextField label='name' placeholder='Enter username' fullWidth required/>
               <TextField label='Password' placeholder='Enter username' fullWidth required/>
               <TextField label='phone' placeholder='Enter the number' fullWidth required/>
               <TextField label='Qualification' placeholder='Enter the Qualification'/>
                <Typography>Languages</Typography>
                <FormControlLabel
        label="English"
        control={<Checkbox checked={checked} onChange={handleChange} inputProps={{'aria-label':'checkbox'}}/>}
      />
      <FormControlLabel
        label="Hindi"
        control={<Checkbox  onChange={handleChange} inputProps={{'aria-label':'checkbox'}}/>}
      />
      <FormControlLabel
        label="Telugu"
        control={<Checkbox  onChange={handleChange} inputProps={{'aria-label':'checkbox'}} />}
      />
      <FormControlLabel
        label="kannada"
        control={<Checkbox  onChange={handleChange} inputProps={{'aria-label':'checkbox'}}/>}
      />
      
               
         <Typography>Skills</Typography>
         <FormControlLabel
        label="React js"
        control={<Checkbox checked={checked} onChange={handleChange} inputProps={{'aria-label':'checkbox'}}/>}
      />
      <FormControlLabel
        label="Node js"
        control={<Checkbox onChange={handleChange} inputProps={{'aria-label':'checkbox'}}/>}
      />
      <FormControlLabel
        label="Cpp"
        control={<Checkbox  onChange={handleChange} inputProps={{'aria-label':'checkbox'}}/>}
      />
      <FormControlLabel
        label=""
        control={<Checkbox  onChange={handleChange} inputProps={{'aria-label':'checkbox'}}/>}
      />

               

            </Paper>
        </Grid>
            

    )
}
// function Register() {
//   const initialValues = { username: "", email: "", password: "" };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues));
//     setIsSubmit(true);
//   };

//   useEffect(() => {
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues);
//     }
//   }, [formErrors]);
//   const validate = (values) => {
//     const errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     if (!values.username) {
//       errors.username = "Username is required!";
//     }
//     if (!values.email) {
//       errors.email = "Email is required!";
//     } else if (!regex.test(values.email)) {
//       errors.email = "This is not a valid email format!";
//     }
//     if (!values.password) {
//       errors.password = "Password is required";
//     } else if (values.password.length < 4) {
//       errors.password = "Password must be more than 4 characters";
//     } else if (values.password.length > 10) {
//       errors.password = "Password cannot exceed more than 10 characters";
//     }
//     return errors;
//   };

//   return (
//     <div className="container">
//       {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
//         <div className="ui message success">Signed in successfully</div>
//       ) : (
//         <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
//       )} */}

//       <form onSubmit={handleSubmit}>
//         <h1>Login Form</h1>
//         <div className="ui divider"></div>
//         <div className="ui form">
//           <div className="field">
//             <label>Username</label>
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={formValues.username}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.username}</p>
//           <div className="field">
//             <label>Email</label>
//             <input
//               type="text"
//               name="email"
//               placeholder="Email"
//               value={formValues.email}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.email}</p>
//           <div className="field">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formValues.password}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.password}</p>
//           <div class="course">
//             <label>Course</label>
//             <input type="text"
//             name="course"
//             placeholder="course"
//             value={formValues.course}
//             onchange={handleChange}
            
//              />
//           </div>
//           <button className="fluid ui button blue">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

export default Register;
