import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
  render() {
    return (
      <div class="homeReg">
      <div class="login wrap">
      <h2><center>REGISTER</center></h2>
      <center>
      <input type="text" name="email" id="bgemail" placeholder="E-MAIL"/>
      <input type="password" name="password" id="bgpass" placeholder="PASSWORD"/>
      <input type="password" name="password" id="bgconfirm" placeholder="CONFIRM PASSWORD"/>
      <input type="button" value="REGISTER" />
      <input type="submit" value="CANCEL" />
      </center>  
      </div> 
      </div>
    );
  }
}

export default Register;
