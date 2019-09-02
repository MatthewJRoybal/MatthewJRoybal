'use-strict';
/*********************************
* WEB - COMPONENTS - APP.JS
*********************************/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RollingEarth from '../styles/video/RollingEarth.mp4';
import PropertyPackets from '../styles/images/propertypackets-logo.png';
import RentPlan from '../styles/images/rentplan-logo.png';
import Sfdem from '../styles/images/sfdem-logo.png';

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
            <div className="container my-5">
              <h1 className="text-center my-3">Portfolio</h1>

              <div className="card-deck">

                <div className="card">
                  <a href="https://www.rentplan.com/" target="_blank" rel="noopener noreferrer">
                    <img className="card-img-top" src={PropertyPackets} alt="Property Packets Logo" />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">First API</h5>
                    <p className="card-text text-justify">Property Packets is the first website I made using an API with JavaScript. The application connects to the U.S. Census Bureau gathering property data. The data is then displayed using Google Charts for a beautiful look. Although I have no plans on expanding this application, it was a great learning experience and helped me begin to understand fundamental concepts in programming.</p>
											<a href="https://www.rentplan.com/" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-space mr-3">Demo</button></a>
	                    <a href="https://github.com/MatthewJRoybal" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-space2">Private: Please ask</button></a>
                  </div>
                </div>

                <div className="card">
                  <a href="https://www.rentplan.com/" target="_blank" rel="noopener noreferrer">
                    <img className="card-img-top img-fluid" src={RentPlan} alt="RentPlan Logo" />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">MERN Stack</h5>
                    <p className="card-text text-justify">Rent Plan is the current application I am working on that I plan to continue to expand to learn and grow. It essentially became part major side project and part learning experience with React. By building out a larger application than my previous experience, I've learned that it is providing retainment through repitition. This side project has been full of challenges and has been a lot of fun.</p>
                    <a href="https://www.rentplan.com/" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-space mr-3">Demo</button></a>
                    <a href="https://github.com/MatthewJRoybal" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-space2">Private: Please ask</button></a>
                  </div>
                </div>

								<div className="card">
			            <a href="https://sfdem.app/" target="_blank" rel="noopener noreferrer">
			              <img className="card-img-top img-fluid" src={Sfdem} alt="SFDEM Logo" />
			            </a>
			            <div className="card-body">
			              <h5 className="card-title font-weight-bold">Completed Project</h5>
			              <p className="card-text text-justify">The San Francisco Department of Emergency Management scheduling application allows Dispatchers to view and bid for shifts every 6 months. It is nearly completion and is a great example of working application in the real world. This project took nearly 6 months to complete and is helping the Department transform from paper to online scheduling.</p>
			              <a href="https://sfdem.app/" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-space">Ask for demo</button></a>
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
