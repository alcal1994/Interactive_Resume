import React from "react";
import profilePicture from '../images/personalWeb.jpg';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';

export default class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      name: "Albert",
      lastName: "Calamatta",
      jobTitle: "Aspiring Software Developer",
      currentPosition: "Computer Science Student"
    };
  }
  render(){
    return(
      <header className="App-header">
      <img src={profilePicture} class ="imgProfile" alt="Avatar"></img>
      <h1>{this.state.name} {this.state.lastName}</h1>
      <h5>{this.state.jobTitle} &middot; {this.state.currentPosition}</h5>

      <div id = "icon">
      <a href = "https://github.com/alcal1994">
      <img src={github} class = "imgIcon" alt="Avatar"></img>
      </a>

      <a href = "https://www.linkedin.com/in/albert-calamatta-bb81b3162/">
      <img src={linkedin} class = "imgIcon" alt="Avatar"></img>
      </a>
      </div>
      </header>
    )
  }
}
