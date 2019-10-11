'use-strict';
/*********************************
* WEB - COMPONENTS - APP.JS
*********************************/

import React, { Component } from 'react';
import RollingEarth from '../styles/video/RollingEarth.mp4';
// import PropertyPackets from '../styles/images/propertypackets-logo.png';
import RentPlan from '../styles/images/rentplan-logo.png';
import Sfdem from '../styles/images/sfdem-logo.png';
import Netflix from '../styles/images/netflix.png';
import Countdown from '../styles/images/countdown.png';
import Calculator from '../styles/images/calculator.png';

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}


	render() {
		return (
			<div id="content">
        <header>
          <ul className="d-flex justify-content-around">
            <li><a className="nav-link text-uppercase font-weight-bold" href="#portfolio">Portfolio</a></li>
            <li><a className="nav-link text-uppercase font-weight-bold" href="#skills">Skills</a></li>
            <li><a className="nav-link text-uppercase font-weight-bold" href="#about">About</a></li>
          </ul>
        </header>

        <main>

          <div id="splash">
            <video id="splash-video" autoPlay loop>
              <source type="video/mp4" src={RollingEarth} />
            </video>
            <div id="splash-content">
              <h1>Matthew J Roybal</h1>
              <span>NodeJS |</span>
              <span>React |</span>
              <span>Express |</span>
              <span>MongoDB</span>
            </div>
          </div>

          <div id="portfolio" className="jumbotron even">
            <div className="text-center container my-5">
              <span className="my-3 display-3">Portfolio</span>

              <div className="row">

                {/**<div className="card">
                  <a href="https://matthewjroybal.github.io/PropertyPackets/" target="_blank" rel="noopener noreferrer">
                    <img className="card-img-top" src={PropertyPackets} alt="Property Packets Logo" />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">First API</h5>
                    <p className="card-text text-justify">Property Packets is the first website I made using an API with JavaScript. The application connects to the U.S. Census Bureau gathering property data. The data is then displayed using Google Charts for a beautiful look. Although I have no plans on expanding this application, it was a great learning experience and helped me begin to understand fundamental concepts in programming.</p>
											<a href="https://matthewjroybal.github.io/PropertyPackets/" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-space mr-3">Demo</button></a>
	                    <a href="https://github.com/MatthewJRoybal/PropertyPackets" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-space2">GitHub</button></a>
                  </div>
                </div>**/}

                <div className="col-12 col-md-6">
                  <a href="https://www.rentplan.com/" target="_blank" rel="noopener noreferrer">
                    <img className="card-img-top img-fluid" src={RentPlan} alt="RentPlan Logo" />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">MERN Stack (In Production)</h5>
                    <p className="card-text text-justify">It seems like every Software Engineer has their own personal project and I'm no different. This application is my personal project called Rent Plan. It has grown slowly, yet steadily over the past year and is now in production using AWS S3, Heroku, and MongoDB Atlas. Utilizing Node, React, Express, and MongoDB, this project harnesses my strong points and keeps me challenged late at night.</p>
                    <a href="https://www.rentplan.com/" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-space mr-3">In Production</button></a>
                    <a href="https://github.com/MatthewJRoybal/RentPlan-web" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-space2 mr-3">Repo: Front</button></a>
										<a href="https://github.com/MatthewJRoybal/RentPlan-api" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-space2">Repo: Back</button></a>
                  </div>
                </div>

								<div className="col-12 col-md-6">
			            <a href="https://sfdem.app/" target="_blank" rel="noopener noreferrer">
			              <img className="card-img-top img-fluid" src={Sfdem} alt="SFDEM Logo" />
			            </a>
			            <div className="card-body">
			              <h5 className="card-title font-weight-bold">SFDEM (In Production)</h5>
			              <p className="card-text text-justify">I was the Lead Software Engineer for this project working in solo capacity. I started this application from scratch and put it into production 5 months later. The application allows Dispatchers from The San Francisco Department of Emergency Management to view and bid for shifts every 6 months. I have had a lot of positive feedback on this application and hope to see it expanded one day.</p>
			              <a href="https://sfdem.app/" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-space">In Production - Ask for demo</button></a>
			            </div>
			          </div>

              </div>
            </div>
          </div>

					<div id="portfolio" className="jumbotron">
            <div className="container my-5">
              <h1 className="text-center my-3">Samples</h1>

              <div className="card-deck">

                <div className="card">
                  <a href="https://matthewjroybal.github.io/netflixmockup/" target="_blank" rel="noopener noreferrer">
                    <img className="card-img-top" src={Netflix} alt="Netflix Mockup Logo" />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Front End (React & Redux)</h5>
                    <p className="card-text text-justify">Netflix Mockup is an example of using React and Redux. An http call is made with a fetch request to simulate pulling json data which then allows the application to display movie titles to the user. A basic example of Redux is evident in the code managing state for React.</p>
											<a href="https://matthewjroybal.github.io/netflixmockup/" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-space mr-3">Demo</button></a>
	                    <a href="https://github.com/MatthewJRoybal/netflixmockup" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-space2">GitHub</button></a>
                  </div>
                </div>

                <div className="card">
                  <a href="https://matthewjroybal.github.io/reactcountdownclock/" target="_blank" rel="noopener noreferrer">
                    <img className="card-img-top" src={Countdown} alt="Countdown clock for NYE" />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Date & Time (React)</h5>
                    <p className="card-text text-justify">This New Years Eve Countdown Clock displays exactly that using setInterval. In addition, it was configured for my local Pacific Standard Time (PST). I hope to find more time to develop this further and add more styling to show off front end skills.</p>
											<a href="https://matthewjroybal.github.io/reactcountdownclock/" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-space mr-3">Demo</button></a>
	                    <a href="https://github.com/MatthewJRoybal/reactcountdownclock" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-space2">GitHub</button></a>
                  </div>
                </div>

                <div className="card">
                  <a href="https://matthewjroybal.github.io/Mortgage-Calculator/" target="_blank" rel="noopener noreferrer">
                    <img className="card-img-top" src={Calculator} alt="Mortgage Calculator Logo" />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">jQuery, Math, & Validation</h5>
                    <p className="card-text text-justify">Definitely one of my older projects before I dived into React. It helped me learn more about programming. This app best demonstrates the use of a mathematical formula using several input values from the form utilizing bootstrap validation and jquery.</p>
											<a href="https://matthewjroybal.github.io/Mortgage-Caculator/" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-space mr-3">Demo</button></a>
	                    <a href="https://github.com/MatthewJRoybal/Mortgage-Caculator" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-space2">GitHub</button></a>
                  </div>
                </div>


              </div>

            </div>
          </div>



          <div id="skills" className="jumbotron odd">
            <div className="container my-5">
              <h1 className="text-center my-5">Skills</h1>
              <div className="row text-center">
                <div className="col-md-4">
                  <h4 className="font-weight-bold">Front End</h4>
                    <ul>
                      <li>HTML5</li>
                      <li>CSS3/SASS</li>
                      <li>JavaScript</li>
                      <li>jQuery</li>
                      <li>Bootstrap</li>
                      <li>React</li>
                      <li>Webpack</li>
                      <li>Drupal</li>
											<li>Cross Browser</li>
                    </ul>
                </div>
                <div className="col-md-4">
                  <h4 className="font-weight-bold">Back End & Data</h4>
                    <ul>
                      <li>Express</li>
                      <li>JSONWebToken</li>
                      <li>Passport</li>
                      <li>Mocha</li>
                      <li>Chai</li>
                      <li>Mongoose</li>
                      <li>MongoDB</li>
                    </ul>
                </div>
                <div className="col-md-4">
                  <h4 className="font-weight-bold">WorkFlow</h4>
                    <ul>
                      <li>NodeJS</li>
                      <li>Trello</li>
                      <li>Gliffy</li>
                      <li>Git</li>
                      <li>GitHub</li>
                      <li>AWS</li>
                      <li>cPanel</li>
											<li>DotEnv</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>

          <div id="about" className="jumbotron even">
            <div className="container my-5">
              <h1 className="text-center my-3">About</h1>
              <p>I grew up in the San Francisco Bay Area. I am married with two wonderful children. I enjoy many things: Spending time with family, hiking, photography, birds, anything Science Fiction, reading, and writing. I've been a 9-1-1 Dispatcher for San Francisco Department of Emergency Management for the past 12 years and I'm ready for a change. I am very passionate about building web applications and I am seriously hoepful someone will pay me to do it all day long. I can't wait to get started!</p>
              <p><a className="btn btn-space btn-lg" href="https://www.linkedin.com/in/matthewjroybal/" target="_blank" rel="noopener noreferrer">More on LinkedIn</a></p>
            </div>
          </div>

        </main>

        <footer>
          <nav>
            <ul className="d-flex justify-content-around">
              <li>
                <a className="nav-link text-uppercase font-weight-bold" href="mailto: matthewjroybal@gmail.com">Email</a>
              </li>
              <li>
                <a className="nav-link text-uppercase font-weight-bold" href="https://www.linkedin.com/in/matthewjroybal/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
              <li>
                <a className="nav-link text-uppercase font-weight-bold" href="https://www.GitHub.com/MatthewJRoybal" target="_blank" rel="noopener noreferrer">GitHub</a>
              </li>
            </ul>
          </nav>
        </footer>
			</div>
		);
	}
}

export default App;
