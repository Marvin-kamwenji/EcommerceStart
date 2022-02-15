import React from "react";
import {useState} from 'react';
import App from "../App";

function Login(props){

  const [state, setState] = useState({
         email: "",
         password: "",
         message: ""
  });
  

  const handleChange = (e) => {
   
    const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
  }


  const handleSubmitClick = (e) => {
    e.preventDefault();
    if(state.password === state.confirmPassword) {
        //TODO:
        //INSTALL AXIOS AND CONNECT TO BACKEND
        // sendDetailsToServer()    
    } else {
        props.showError('Passwords do not match');
    }
}

  
    return(

    <div className="container">

        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
       
       <h3 className="m-4 p-3 border-bottom ">Login</h3>


        {/* Email starts */}
        
        <div className="form-group form-row">
        <label className="col-lg-4">Email:</label>
        <input type="email" 
                         className="form-control" 
                         id="email" 
                         aria-describedby="emailHelp" 
                         placeholder="Enter email" 
                         value={state.email}
                         onChange={handleChange}

                  />
        </div>
        {/* Email ends */}

        {/* Password starts */}
        <div className="form-group form-row">
        <label className="col-lg-4">Password:</label>
        <input type="password" 
                          className="form-control" 
                          id="password" 
                          placeholder="Password"
                          value={state.password}
                          onChange={handleChange} 

                      /> 
        </div>
        {/* Password ends */}

        {/* Login button starts */}
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
          <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
          >
                   Login
          </button>
        </div>
        
        {/* Login button ends */}
        </div>
    </div>    
    );

}

export default Login;