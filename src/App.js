import React from "react";
import "./App.css";
import './index.css';
import linkedIn from "./icons/linkedin.png";
import gitHub from "./icons/github-image.png";
import beerViz from "./Images/BeerProduction.gif";
import stackLine from "./Images/StacklineInterview.PNG"
import gitHubW from "./icons/github.png";
import resume from "./icons/resume.png";
import resumePDF from "./Documents/Resume (Thomas McDonald).pdf";

// t-mcdonald.com
function App() {
  return (
    <div className="Main-Container">
      <header className="SideBanner">
        <div className="SideContent">
          <title className="Title">
            THOMAS MCDONALD
          </title>
          <h1 className="Subtitle">
            DEVELOPER.
            <br/>
            CRITICAL THINKER.
            <br/>
            LIFE LONG LEARNER.
          </h1>
          
          <div className="Body">
            <p>
              Hi, I'm Thomas! I've been contracting as a front end developer with Netflix the past 2 years, but I am ready for a change. I have been working with React JS the past 3 years, and I'm currently seeking hybrid or remote frontend positions. 
              <br /><br />
              I pick up on new technologies quickly and I’m eager to dive deep into this industry. I believe my greatest strengths are my ability to communicate with others and my creative thought process. 
              Check out my socials, resume and past projects.
              <br /><br />
              Go Zags!
            </p>
          </div>
          <section className="Icon-Container">
            <form className="Link-Wrapper" target='_blank' action="https://www.linkedin.com/in/thomasmcdonald1998/">
              <input type="image" className="Icon" src={linkedIn}  alt="LinkedIn"/>
            </form>
            <form className="Link-Wrapper" target='_blank' action="https://github.com/TMcDonald98">
              <input type="image" className="Icon" src={gitHub} alt="GitHub"/>
            </form>
            <form className="Link-Wrapper" target='_blank' action={resumePDF}>
              <input type="image" className="Icon" src={resume} alt="GitHub"/>
            </form>
          </section>
          <a className="Link-Wrapper Icon-Container" href="mailto:ThomasMcDonald1998@Gmail.com?subject=Website Inquiry">
            <div className="EmailButton">
              Hit Me Up!
            </div>
          </a>
        </div>

      </header>
      <div className="All-Content">
        <article className="Content-Container Content2">
          <h3 className="ContentTitle">
            Mock Product Page
          </h3>
          <img className="ContentImage ContentImage2" src={stackLine} alt='productIMG'/>
          <form className="Link-Wrapper" target='_blank' action="https://github.com/TMcDonald98/Stackline-Frontend-Assessment">
            <input type="image" className="Icon" src={gitHubW} alt="GitHub"/>
          </form>
        </article>
        <article className="Content-Container Content1">
          <h2 className="ContentTitle">
            Beer Production Visualization.
          </h2>
          <img className="ContentImage ContentImage1" src={beerViz} alt='beerViz'/>
          <form className="Link-Wrapper" target='_blank' action="https://github.com/TMcDonald98/Beer-Production-Visualization">
            <input type="image" className="Icon" src={gitHubW} alt="GitHub"/>
          </form>
        </article>
        <article className="Content-Container Content3">
          <div className="ContentTitle">
          </div>
        </article>
        {/* <GitCalendar/> */}
        <footer>
          Made By Thomas McDonald, 2020.
        </footer>
      </div>
    </div>
  );
}

export default App;
