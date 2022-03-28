import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class  SignIn extends Component{

  login(event) {
    event.preventDefault();
    const data = new FormData(event.target);
  
    console.log(data.get('email')); // reference by form input's `name` tag
    console.log(data.get('password')); // reference by form input's `name` tag
  
    const requestBody = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "emailOrMobile": data.get('email'),"password":data.get('password') })
  }

  let err={
    errorMessage:''
  }
fetch('https://e-procurement.herokuapp.com/api/v1/user/login', requestBody)
.then(response => err=response.json())
.then(response=> {
  if(response.status){
    alert(response.message)
    localStorage.setItem('sessionToken',response.token)
  }else{
    alert(response.message)
  }
})

}

  render(){
  return(
<section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid"
          alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form onSubmit ={this.login}>
        <label className="form-label" htmlFor="form3Example3"></label>

          <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form3Example3">Email Or Mobile</label>
            <input type="text" id="email"  name="email" className="form-control form-control-lg"
              placeholder="Enter Link valid email address" />        
          </div>

          <div className="form-outline mb-3">
          <label className="form-label" htmlFor="form3Example4">Password</label>
            <input type="password" id="password" name="password" className="form-control form-control-lg"
              placeholder="Enter password" />          
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
}  

export default SignIn;