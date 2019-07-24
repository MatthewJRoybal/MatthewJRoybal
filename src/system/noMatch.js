'use-strict';
/***********************************
* WEB - COMPONENTS - NOMATCH.JS
***********************************/

import React from 'react';

class NoMatch extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="nomatch">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-7 col-xl-6">
                <h1 className="display-4 text-center">
                  Oops, Where'd You Go?
                </h1>
                <p className="lead text-center">
                  Check the url, it seems there isn't a match to that path.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NoMatch;
