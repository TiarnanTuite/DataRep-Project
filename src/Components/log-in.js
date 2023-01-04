import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      <form>
        <h1>Log In</h1>

        <div className="form">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="       Enter email"/>
        </div>

        <div className="form">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="       Enter password"/>
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
        <p className="forgot-password text-right">
          Not a member? <a href="/sign-up">Sign up!</a>
        </p>
      </form>
    )
  }
}