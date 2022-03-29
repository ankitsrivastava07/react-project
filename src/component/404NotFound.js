import React, { Component }  from "react";
import style from '../style.css'

class  NotFound extends Component{

    style={
        width: "32rem"
    }

    render(){
    return( <div className="row justify-content-center">
    <div className="col-md-12 col-sm-12">
        <div className="card shadow-lg border-0 rounded-lg mt-5 mx-auto" style= {this.style}>
            <h3 className="card-header display-1 text-muted text-center">
                404
            </h3>

            <span className="card-subtitle mb-2 text-muted text-center">
                Page Could Not Be Found 
            </span>

            <div className="card-body mx-auto">
                <a type="button" href="#"
                className="btn btn-sm btn-info text-white"> Back To Home </a>
            </div>
        </div>
    </div>
</div>
 )
    }
}

export default NotFound;