import React, { Component } from "react";

const ShowAlertSuccess = (props) =>{
  if(props.message===''){
  return ""
}

if(props.status){
  return(
    <div className="alert alert-success" role="alert">
     {props.message}
   </div> 
  )
}

}
    
export default ShowAlertSuccess;