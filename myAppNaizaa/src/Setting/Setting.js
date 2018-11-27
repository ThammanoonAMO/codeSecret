import React, { Component } from 'react';
import './Setting.css';

class Setting extends Component {
render() {
return (

<div class="login wrap">
  <a href="#" className="app-link"></a>
  <a href="#" className="linelog">LOG OUT</a>
  <a href="#" className="linehome">HOME</a>

  <h2><center>SETTING</center></h2>
  <center>
    <input type="text" name="email" id="bgemail" placeholder="E-MAIL"/>
    <input type="password" name="password" id="bgpass" placeholder="PASSWORD"/>
    <input type="password" name="password" id="bgconfirm" placeholder="CONFIRM PASSWORD"/>
    <input type="button" href="#" value="SAVE" />
    <input type="submit" href="#" value="CANCEL" />
  </center>  
</div> 
);
}
}
export default Setting;
