import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div class="login wrap">
      <h2><center>LOG IN</center></h2>
      <center>
      <input type="text" name="email" id="bgemail" placeholder="E-MAIL"/>
      <input type="password" name="password" id="bgpass" placeholder="PASSWORD"/>
      <input type="button" value="LOG IN" />
      <input type="submit" value="CANCEL" />
      </center>  
      </div> 
    );
  }
}

export default Login;
