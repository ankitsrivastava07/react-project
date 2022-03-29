import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import ShowAlertSuccess from './restApi/ShowAlertSuccess'

const  SignIn = () => {

  const [email,setEmail]= useState('')
  const [password,setPassword] = useState('')

  const [response,setResponse] = useState('')
  const [flag, setFlag] = useState('')
  const [validationFailed, setValidation] = useState('')
  const [err1, setErr1] = useState('')
  const [err2, setErr2] = useState('')

  const [err,setErr]= useState('')

  const setEmailValue = (event) => {
    console.log(event.target.value)
    setEmail(event.target.value);
  }

  const setPasswordValue = (event) => {
    console.log(event.target.value)
    setPassword(event.target.value);
  }

  const login = (event) => {
    event.preventDefault();
    
    const requestBody = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ "emailOrMobile": email,"password": password })
  }

    fetch('https://e-procurement.herokuapp.com/api/v1/user/login', requestBody)
    .then(response => response.json())
    .then(response=> {
      if(response.validationFailed){
        setErr(response.errors);
        setValidation(response.validationFailed);
        setErr1(response.errors[0].message)
      }
      else if(response.status){
        setResponse(response.message)
        setFlag(response.status)
        localStorage.setItem('sessionToken',response.token)
      }else{
        setResponse(response.message)
        setFlag(response.status)      
      }
    })
  }

  const showErr = () =>{
    return(err.map((key,i) => {
    <span>{key.message}</span> 
      })
    )
  }

  return(
<section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid"
          alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form onSubmit ={login}>

        {
          flag? <ShowAlertSuccess status={true} message={response}/> :  <ShowAlertSuccess message={response}/>
         }
          {err1?? err1}
          <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form3Example3">Email Or Mobile</label>
            <input type="text" id="email" onChange={setEmailValue} name="email" className="form-control form-control-lg"
              placeholder="Enter email here " />        
          </div>

          <div className="form-outline mb-3">
          <label className="form-label" htmlFor="form3Example4">Password</label>
            <input type="password" id="password" onChange={setPasswordValue} name="password" className="form-control form-control-lg"
              placeholder="Enter password here " />          
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" htmlFor="form2Example3">
                Remember me
              </label>
            </div>
            <Link to="#!" className="text-body">Forgot password?</Link>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
           <center> <input className="btn btn-primary btn-lg" type="Submit"/></center>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="#!"
                className="link-danger">Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    )
}

export default SignIn;