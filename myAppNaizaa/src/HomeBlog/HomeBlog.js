import React, { Component } from 'react';
import './HomeBlog.css';
import profile from './user.png';

class Setting extends Component {
render() {
return (
  <div class="homeSet">
  <div class="login wrap">
  <a href="#" className="app-link"></a>
  <a href="#" className="linelog">LOG OUT</a>
  <a href="#" className="lineWrite">write code</a>
  <img src={profile} className="profileLogo" alt="logo" />
  <a className="txtEmail inline">user@email.com</a> 
  </div> 

  <body className="bodyRead">
  <div  className="result">
  <h2>CODE HEADER</h2>
  <p>int a,b,c;
  vfmvfmvmf\nmmeomcoemcmoemcoemocmoem
  eokceocekpcpkepkpcke
  ceocmoeocmoemocme
  emcoemocmoecme
  eoceomcoemocme
  ovomvorovnrom
  flvlfmvmf
  vflmvomf
  vmfovmf
  </p>

  <h3>by : user@gmail.com</h3>
  <a href="#" className="read">read more >></a>
  </div>
  </body>
  </div>

);
}
}
export default Setting;
