import React from "react";
import logo from "./logo.svg";
import "./App.css";
import './index.css';
import linkedIn from "./icons/linkedin.png";
import gitHub from "./icons/github-image.png";
import beerViz from "./Images/BeerProduction.gif";
import gitHubW from "./icons/github.png";
import resume from "./icons/resume.png";
import resumePDF from "./Documents/Resume (Thomas McDonald).pdf";
import GitCalendar from "./Components/GitCalendar.js";
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
            <p1>
              Hi, I'm Thomas! I recently graduated from Gonzaga University with my BS in computer science and 
              now I'm searching for a software engineering position. I have worked two summer internships 
              and even seen some success in starting a company, Adventure Game Works. For this company, 
              I prototyped a web application using ReactJS that allowed users to understand and customize 
              their purchased events. Adventure Game Works went on to place second in both the Northwest 
              Entrepreneurial Competition and the Dempsey Startup Competition. I took this experience and used 
              it to land an internship at Kroger the following summer. I joined one of their Front-End web-dev 
              teams where I was working with ReactJS, Redux, and Node and shipping code to tens of thousands of 
              users.
              <br/><br/>
              I pick up on new technologies quickly and I’m eager to dive deep into this industry. I believe my greatest strengths are my ability to communicate with others and my creative thought process. 
              Check out my socials, resume and past projects.
            </p1>
          </div>
          <section className="Icon-Container">
            <form className="Link-Wrapper" action="https://www.linkedin.com/in/thomasmcdonald1998/">
              <input type="image" className="Icon" src={linkedIn} alt="LinkedIn"/>
            </form>
            <form className="Link-Wrapper" action="https://github.com/TMcDonald98">
              <input type="image" className="Icon" src={gitHub} alt="GitHub"/>
            </form>
            <form className="Link-Wrapper" action={resumePDF}>
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
        <article className="Content-Container Content1">
          <h2 className="ContentTitle">
            Beer Production Visualization.
          </h2>
          <img className="ContentImage" src={beerViz}/>
          <form className="Link-Wrapper" action="https://github.com/TMcDonald98/Beer-Production-Visualization">
            <input type="image" className="Icon" src={gitHubW} alt="GitHub"/>
          </form>
        </article>
        <article className="Content-Container Content2">
          <div className="ContentTitle">
            More Projects Coming Soon!
          </div>
        </article>
        <article className="Content-Container Content3">
          <div className="ContentTitle">
            More Projects Coming Soon!
          </div>
        </article>
        <GitCalendar/>
        <footer>
          Made By Thomas McDonald, 2020.
        </footer>
      </div>
    </div>
  );
}

export default App;
