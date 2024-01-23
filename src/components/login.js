import './login.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from "react"
import { Link } from 'react-router-dom';
export default function Login() {
    let [authMode, setAuthMode] = useState("signin")
  
    const changeAuthMode = () => {
      setAuthMode(authMode === "signin" ? "signup" : "signin")
    }
    // function handleClick(){
    //   return(
    //     <Alert severity="success">
    //     <AlertTitle>Success</AlertTitle>
    //     This is a success alert — <strong>check it out!</strong>
    //   </Alert>
    //   );
    // }
    if (authMode === "signin") {
      return (
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              {/* <img src="IMDB.png" alt="logo"></img> */}
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign Up
                </span>
              </div>
              <div className="form-group mt-3">
                <label>USER_NAME</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter User-Name"
                />
              </div>
              <div className="form-group mt-3">
                <label>PASSWORD</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
              <Link to="/">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </Link>  
              </div>
              
            </div>
          </form>
        </div>
      )
    }
  
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            {/* <img classname="imgsrc" src="IMDB.png"></img> */}
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign In
              </span>
            </div>
            <div className="form-group mt-3">
              <label>USER_NAME</label>
              <input
                type=""
                className="form-control mt-1"
                placeholder="enter your prefered user name:"
              />
            </div>
            <div className="form-group mt-3">
              <label>EMAIL_ID</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group mt-3">
              <label>PASSWORD</label>
              <input
                type="id"
                className="form-control mt-1"
                placeholder="Enter a password:"
              />
            </div>
            <div className="form-group mt-3">
              <label>RE-ENTER PASSWORD</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Confirm your password:"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Create account
              </button>
            </div>
            
          </div>
        </form>
      </div>
    )
  }