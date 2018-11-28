import React, { Component } from 'react';
import './style.css';
import profile from './user.png';
import setup from './set.png';
import line from './-.png';

class App extends Component {
    render() {
        return (
                <div className="Read">
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
                <body className="bodyRead">
                <div className="fDiv">
                    <h1 align="left">CODE HEADER</h1>
                    <h4 align="left">by: user@email.com</h4>
                    <p align="left" className="des">The Blue Whales just played their first baseball game of the new season; I believe there is much to be excited about. Although they lost, it was against an excellent team that had won the championship last year. The Blue Whales fell behind early but showed excellent teamwork and came back to tie the game. The team had 15 hits and scored 8 runs. That’s excellent! Unfortunately, they had 5 fielding errors, which kept the other team in the lead the entire game. The game ended with the umpire making a bad call, and if the call had gone the other way, the Blue Whales might have actually won the game. It wasn’t a victory, but I say the Blue Whales look like they have a shot at the championship, especially if they continue to improve.
                    </p>
                    <div align="left" className="code">
                Online games arent just a diversion, but a unique way to meet other people. As millions of gamers demonstrate, playing online is about friendship and cooperation, not just killing monsters. These games are a viable social network because players focus on teamwork, form groups with like-minded people and have romantic relationships with other players.Massively-Multiplayer Online Games (MMOGs) feature millions of players interacting in the same environment. The games are social in nature as they allow players to band together and complete missions based on a story line, or test their skills by fighting against each other. At the start of the game, the user creates a fictional character, and customizes its physical appearance. Since many games involve combat, players also outfit their characters with armor and weapons, as well as choose their "profession." Many popular game titles like World of Warcraft and Everquest follow a fantasy theme, so most professions have magical abilities like healing other players or raising undead minions. While the process seems simple, players may spend hours agonizing over the perfect look for their character, from their armor color to the type of skills to use in battle. Once their character is created, the player is free to explore the vast, digital world and interact with other players; however they must pay on average $15 a month for game content. MMOG users are mostly male - usually between the ages of 18-34 - although titles like World of Warcraft have a healthy population of female players as well. With millions of players, there are plenty of people to adventure with.
                Online games arent just a diversion, but a unique way to meet other people. As millions of gamers demonstrate, playing online is about friendship and cooperation, not just killing monsters. These games are a viable social network because players focus on teamwork, form groups with like-minded people and have romantic relationships with other players.Massively-Multiplayer Online Games (MMOGs) feature millions of players interacting in the same environment. The games are social in nature as they allow players to band together and complete missions based on a story line, or test their skills by fighting against each other. At the start of the game, the user creates a fictional character, and customizes its physical appearance. Since many games involve combat, players also outfit their characters with armor and weapons, as well as choose their "profession." Many popular game titles like World of Warcraft and Everquest follow a fantasy theme, so most professions have magical abilities like healing other players or raising undead minions. While the process seems simple, players may spend hours agonizing over the perfect look for their character, from their armor color to the type of skills to use in battle. Once their character is created, the player is free to explore the vast, digital world and interact with other players; however they must pay on average $15 a month for game content. MMOG users are mostly male - usually between the ages of 18-34 - although titles like World of Warcraft have a healthy population of female players as well. With millions of players, there are plenty of people to adventure with.
                </div>
                <button className="btnCompile" >compile</button>
                <div align="left" className="result">
                <h2>Result</h2>
                <p>0 11 12 13 14 15 16 17 18 19 20
                .....11
                Hello World!!</p>
                </div>
                </div>
                </body>
                </div>
                );
    }
}

export default App;

