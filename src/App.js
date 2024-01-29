import React from "react";
import "./App.css";
import './index.css';
import linkedIn from "./icons/linkedin.png";
import gitHub from "./icons/github-image.png";
import beerViz from "./Images/BeerProduction.gif";
import stackLine from "./Images/StacklineInterview.PNG"
import gitHubW from "./icons/github.png";
import resume from "./icons/resume.png";
import resumePDF from "./Documents/Thomas McDonald Resume 2024.pdf";

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
              Hi, I'm Thomas! The past year I have dedicated my expertise at Mission Cloud working as a Full Stack engineer. During this period I have worked with external clients to maintain and develop new features for several AWS applications.
              <br /><br />
              Prior to Mission, I had the incredible opportunity to contribute as a front-end developer at Netflix, where I played a key role in shaping user experiences.
              <br /><br />
              My strengths lie in effective communication and a creative thought process. Explore more about my socials, resume, and past projects here.
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
