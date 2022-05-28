import { useState } from 'react';
import logo from './assets/logo.svg';
import Inputs from './components/Inputs';
import { Button } from '@mui/material';
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
      document.getElementById("email").focus()
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
      <div className="wrapper">
        <img className="img-logo" src={logo} alt="" />
        <h1 className="main-title">Welcome <span className="sr-only">to livestock wealth </span></h1>
        <h2 className="sub-title">Create wealth</h2>
        <main className="main">
          <form className="form" onSubmit={onSubmit}>
            <fieldset className='form-inputs-container'>

              {/* email details */}
              <Inputs divClassName="customer-email" labelfor="email" labeltext="Email"
                type="email" name="email" id="email" placeholder=""
                autoComplete="email" onChange={onChange} onBlur={onBlur} value={email}
                min={5} max={50} ariaDescribedBy="error-email" errors={errors.email}
                errorId="error-email" />
              {/* email details */}

              {/* first name details */}
              <Inputs divClassName="customer-first-name" labelfor="firstname" labeltext="First Name"
                type="text" name="firstName" id="firstname" placeholder=""
                autoComplete="given-name" onChange={onChange} onBlur={onBlur} value={firstName}
                min={1} max={50} ariaDescribedBy="error-first-name" errors={errors.firstName}
                errorId="error-first-name" />
              {/* first name details */}

              {/*last name details */}
              <Inputs divClassName="customer-last-name" labelfor="lastname" labeltext="Last Name"
                type="text" name="lastName" id="lastname" placeholder=""
                autoComplete="family-name" onChange={onChange} onBlur={onBlur} value={lastName}
                min={1} max={50} ariaDescribedBy="error-last-name" errors={errors.lastName}
                errorId="error-first-name" />
              {/* last name details */}

              {/*password details */}
              <Inputs divClassName="customer-password" labelfor="password" labeltext="Password"
                type="password" name="password" id="password" placeholder=""
                autoComplete="off" onChange={onChange} onBlur={onBlur} value={password}
                min={4} max={50} ariaDescribedBy="error-password" errors={errors.password}
                errorId="error-password" />
              {/* password details */}

              {/*confirm password details */}
              <Inputs divClassName="customer-confirm-password" labelfor="cpassword" labeltext="Confirm Password"
                type="password" name="confirmPassword" id="cpassword" placeholder=""
                autoComplete="off" onChange={onChange} onBlur={onBlur} value={confirmPassword}
                min={4} max={50} ariaDescribedBy="error-cpassword" errors={errors.confirmPassword}
                errorId="error-cpassword" />
              {/*confirm password details */}

            </fieldset>

            <Button variant="contained" type='submit' className='btn' >Create Account</Button>
          </form>
          <p className="alt-sign-in">Do you have an existing account?
            <a href="/"> Sign in</a></p>
        </main>
      </div>

    </div>
  );
}

export default App;
