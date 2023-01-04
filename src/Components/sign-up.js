import React, { Component } from 'react'
import "../styles/main.css"

export class Signup extends Component {
  //variables for input to be saved into
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
    //initialize handlesubmit method
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, email, password } = this.state;
    //console.log(fname, lname, email, password);

    //using fetch get the /register api from the server and post the variables in json format
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        email,
        lname,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //verify in console
        console.log(data, "userRegistered");
      });
  }

  render() {
    return (
      //handleSubmit method on button
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>

        <div className="form">
          <label>First name</label>
          <input type="text" 
          className="form-control" 
          placeholder="     First name" 
          onChange={e=>this.setState({fname:e.target.value})}/>
        </div>

        <div className="form">
          <label>Last name</label>
          <input type="text" 
          className="form-control" 
          placeholder="     Last name" 
          onChange={e=>this.setState({lname:e.target.value})}/>
        </div>

        <div className="form">
          <label>Email address</label>
          <input type="email" 
          className="form-control" 
          placeholder="     Enter email" 
          onChange={e=>this.setState({email:e.target.value})}/>
        </div>

        <div className="form">
          <label>Password</label>
          <input type="password" 
          className="form-control" 
          placeholder="     Enter password" 
          onChange={e=>this.setState({password:e.target.value})}/>
        </div>

        <div className="buttonCss">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/log-in">Log in?</a>
        </p>
      </form>
    )
  }
}