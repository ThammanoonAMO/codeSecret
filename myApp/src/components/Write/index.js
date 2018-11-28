import React, { Component } from 'react';
import './style.css';
import profile from './user.png';
import setup from './set.png';
import line from './-.png';

class App extends Component {
    render() {
        return (
                <div className="Post">
                    <header>
                        <div className="inline head noW">
                            <div className="leftH noW">
                                <img src={profile} className="profileLogo" alt="logo" />
                                <h2 className="txtEmail inline">user@email.com</h2>
                            </div>
                            <div className="rightH noW">
                                <a href="http://localhost:3000" className="app-link">HOME</a>
                                <img src={line} className="lineLogo inline" alt="logo" />
                                <a href="http://localhost:3000" className="app-link">LOG OUT</a>
                            </div>
                        </div>
                    </header>
                    <body className="bodyPost">
                        <div>
                        <form className="fDiv">
                            <input type="text" id="h" name="header" placeholder="CODE HEADER" className="fInput"/>
                            <input type="text" id="d" name="descript" placeholder="CODE DESCRIPTION ..." className="fInput"/>
                            <textarea type="text" id="c" name="code" placeholder="CODE ... [Python]" className="fInput" cols="50" rows="10" />
                            <textarea type="text" id="a" name="account" placeholder="ACCOUNT TO ALLOW" className="fInput" cols="50" rows="3" />
                            <div className="noW">
                                <button class="btn" to="Read">SAVE
                                </button>
                                <button class="btn">CANCEL</button>
                            </div>
                        </form>
                        </div>
                    </body>
                </div>
                );
    }
}

export default App;
