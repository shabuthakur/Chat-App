import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        <div className="field">
          <input type="email" placeholder="Email" required></input>
        </div>
        <div className="field">
          <input type="password" placeholder="Password" required></input>
        </div>
        <div className="field">
          <button type="submit">Log In</button>
        </div>
      </form>
    );
  }
}