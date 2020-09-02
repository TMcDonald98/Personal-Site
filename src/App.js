import React from "react";
import logo from "./logo.svg";
import "./App.css";
import './index.css';
import linkedIn from "./icons/linkedin.png"
import gitHub from "./icons/github-image.png"

function App() {
  return (
    <div className="Main-Container">
      <div className="SideBanner">
        <div className="Title">
          THOMAS MCDONALD
        </div>
        <div className="Subtitle">
          DEVELOPER.
        </div>
        <div className="Subtitle">
          THINKER.
        </div>
        <div className="Subtitle">
          HUMAN.
        </div>
        <div className="Body">
          Hi I'm Thomas! Currently searching for a software engineering position. 
          Formerly Front-End Devloper at Kroger Technologies.
          Check out my socials below as well as some of my past projects.
        </div>
        <div className="Icon-Container">
          <form className="Link-Wrapper" action="https://www.linkedin.com/in/thomasmcdonald1998/">
            <input type="image" className="Icon" src={linkedIn} alt="LinkedIn"/>
          </form>
          <form className="Link-Wrapper" action="https://github.com/TMcDonald98">
            <input type="image" className="Icon" src={gitHub} alt="GitHub"/>
          </form>
        </div>
        <a className="Link-Wrapper Icon-Container" href="mailto:ThomasMcDonald1998@Gmail.com?subject=Website Inquiry">
          <a className="EmailButton">
            Hit Me Up
          </a>
        </a>

      </div>
      <div className="Content-Container Content1">
        <div className="ContentTitle">
          Project 1
        </div>
      </div>
      <div className="Content-Container Content2">
        <div className="ContentTitle">
          Project 2
        </div>
      </div>
      <div className="Content-Container Content3">
        <div className="ContentTitle">
          Project 3
        </div>
      </div>
    </div>
  );
}

export default App;
