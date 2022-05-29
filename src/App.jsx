import { useState } from 'react';
import logo from './assets/logo.svg';
import Inputs from './components/Inputs';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { InputAdornment } from '@mui/material';
import { Typography } from '@mui/material';
import { Avatar } from '@mui/material';
//import { AccountCircle } from '@mui/icons-material';
import { Email, Scale } from '@mui/icons-material';
import './App.css';

function App() {

  const initialState = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    touched: {
      email: false,
      firstName: false,
      lastName: false,
      password: false,
      confirmPassword: false,
    },
  }
  const [formData, setFormData] = useState(initialState)
  const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const onChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const { email,
    firstName,
    lastName,
    password,
    confirmPassword } = formData

  const onBlur = (e) => {
    console.log(e)
    const { name } = e.target
    setFormData({ ...formData, touched: { ...formData.touched, [name]: true } })
  }

  const onSubmit = (evt) => {
    evt.preventDefault()

    // Object to collect error feedback and to display on the form
    const errors = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
    }
    console.log(errors)

    if (formData.email.trim("") === "" ||
      formData.email.trim("").length < 1 ||
      formData.email.trim("").length > 50) {
      // document.getElementById("email").focus()
      return
    }

    if (formData.firstName.trim("") === "" ||
      formData.firstName.trim("").length < 1 ||
      formData.firstName.trim("").length > 50) {
      document.getElementById("firstname").focus()
      return
    }

    if (formData.lastName.trim("") === "" ||
      formData.lastName.trim("").length < 1 ||
      formData.lastName.trim("").length > 50) {
      document.getElementById("lastname").focus()
      return
    }

    if (formData.password.trim("") === "" ||
      formData.password.trim("").length < 1 ||
      formData.password.trim("").length > 50) {
      document.getElementById("password").focus()
      return
    }

    if (formData.confirmPassword.trim("") === "" ||
      formData.confirmPassword.trim("").length < 1 ||
      formData.confirmPassword.trim("").length > 50) {
      document.getElementById("cpassword").focus()
      return
    }

    if (password !== confirmPassword) {
      alert("Password do not match")
      return
    }
  }

  const validate = () => {
    // Object to collect error feedback and to display on the form
    const errors = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
    }

    //validate firstname
    if ((formData.touched.firstName && formData.firstName.trim("").length < 1) ||
      (formData.touched.firstName && formData.firstName.trim("").length > 50)) {
      errors.firstName = 'First name not valid'
    }

    //validate firstname
    if ((formData.touched.lastName && formData.lastName.trim("").length < 1) ||
      (formData.touched.lastName && formData.lastName.trim("").length > 50)) {
      errors.lastName = 'Last name not valid'
    }

    //validate email
    if ((formData.touched.email && formData.email.trim("").length <= 5) ||
      (formData.touched.email && formData.email.trim("").length > 50)) {
      errors.email = 'Email is short or too long'
    }

    if ((formData.touched.email && !formData.email.match(validEmail))) {
      errors.email = 'Please use a valid email address'
    }

    //validate password
    if ((formData.touched.password && formData.password.trim("").length < 4) ||
      (formData.touched.password && formData.password.trim("").length > 50)) {
      errors.password = 'incorrect password'
    }

    //validate confirm password
    if ((formData.touched.confirmPassword && formData.confirmPassword.trim("").length < 4) ||
      (formData.touched.confirmPassword && formData.confirmPassword.trim("").length > 50)) {
      errors.confirmPassword = 'password do not match'
    }


    return errors
  }

  const errors = validate()

  return (
    <div className="App">
      <Box sx={{ backgroundColor: "white", borderRadius: 2, width: "95%", maxWidth: 598 }}>
        <img className="img-logo" src={logo} alt="" />

        <Typography variant="h1" sx={{
          fontSize: "1.68rem", fontFamily: "Montserrat",
          color: "#8A5D26", fontWeight: 700
        }}>
          Welcome
        </Typography>

        <Typography variant="h2" sx={{
          fontSize: "1.38rem", fontFamily: "Montserrat",
          color: "#8A5D26", fontWeight: 700, marginBlock: 2,
        }}>
          Create wealth
        </Typography>


        <main className="main">
          <Box component="form" onSubmit={onSubmit}>


            <TextField id="email" label="Email" variant="standard" required
              sx={{ width: "100%", maxWidth: "23rem", mb: 1 }}
              type="email"
            />

            <TextField id="first-name" label="First Name" variant="standard" required
              autoComplete="given-name"
              sx={{ width: "100%", maxWidth: "23rem", mb: 1 }}
            />

            <TextField id="last-name" label="Last Name" variant="standard" required
              sx={{ width: "100%", maxWidth: "23rem", mb: 1 }} autoComplete="family-name" />


            <TextField id="password" label="Password" variant="standard" required
              sx={{ width: "100%", maxWidth: "23rem", mb: 1 }}
              type="password" InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Avatar src="./assets/Vector.svg" alt=""
                      sx={{ transform: "scale(.5)" }} />
                  </InputAdornment>
                )
              }} />

            <TextField id="cpassword" label="Confirm Password" variant="standard" required
              sx={{ width: "100%", maxWidth: "23rem", mb: 1 }}
              type="password" InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Avatar src="./assets/Vector.svg" alt=""
                      sx={{ transform: "scale(.5)" }} />
                  </InputAdornment>
                )
              }} />


            {/*confirm password details 
              <Inputs divClassName="customer-confirm-password" labelfor="cpassword" labeltext="Confirm Password"
                type="password" name="confirmPassword" id="cpassword" placeholder=""
                autoComplete="off" onChange={onChange} onBlur={onBlur} value={confirmPassword}
                min={4} max={50} ariaDescribedBy="error-cpassword" errors={errors.confirmPassword}
                errorId="error-cpassword" />
              confirm password details */}


            <Button variant="standard" type="submit" sx={{
              fontSize: "1rem", fontFamily: "Montserrat", color: "#ffffff",
              backgroundColor: "#8A5D26", fontWeight: 500, marginBlock: "1rem",
              "&:hover": {
                backgroundColor: "#8A5D26",
                opacity: [0.9, 0.8, 0.7],
              }
            }}>
              Create Account
            </Button>
          </Box>

          <Typography variant="paragraph" sx={{
            fontSize: "1rem", fontFamily: "Montserrat", color: "#8A5D26",
            fontWeight: 500, marginBlock: "1rem",
          }} >
            Do you have an existing account?
            <Button href="/" sx={{ color: "#8A5D26", fontWeight: 700 }}> Sign in</Button>
          </Typography>

        </main>
      </Box>

    </div>
  );
}

export default App;
