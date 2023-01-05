import React, { Component } from 'react'
import "../styles/main.css"

export class Login extends Component {
  //variables for input to be saved into
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    //initialize handlesubmit method
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log( email, password);

    //using fetch get the /register api from the server and post the variables in json format
    fetch("http://localhost:5000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //verify in console
        console.log(data, "userLogin");

        if(data.status === "ok"){
          alert("Log In Successful");
          //store locally so can be used in other files
          window.localStorage.setItem("token", data.data);
          window.location.href="./";
        }
        else{
          alert("Invalid user. Please try again.");
        }
      });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Log In</h1>

        <div className="form">
          <label>Email address</label>
          <input type="email" 
          className="form-control" 
          placeholder="       Enter email"
          onChange={(e)=>this.setState({email:e.target.value})}/>
        </div>

        <div className="form">
          <label>Password</label>
          <input type="password" 
          className="form-control" 
          placeholder="       Enter password"
          onChange={(e)=>this.setState({password:e.target.value})}/>
        </div>

        <div className="form">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1"/>
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p>
          Not a member? <a href="/sign-up">Sign up!</a>
        </p>
      </form>
    )
  }
}