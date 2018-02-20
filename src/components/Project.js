import React, {Component} from 'react';
import closeIcon from '../images/close-icon@2x.png';

class Project extends Component {
  render() {
    const {changeProjectStatus, status} = this.props;

    return (
      <div className="project-block">
      <div id="project-popup" className={"row textAlignCenter " + status}>
        <a className="close-project" onClick={changeProjectStatus}>
          <img src={closeIcon} width="20" height="20" alt="close icon"/>
        </a>
        <div className="reaCTA">
          <h2>We are REA.</h2>
          <p className="text-upper">American graphic design awards
            <span className="hidden-xs hidden-sm">—</span>
            GDUSA 2017</p>
          <a href="assets/pdf/REA-GDUSA-Projects-Overview.pdf" target="_blank" rel="noopener noreferrer">
            PROJECTS OVERVIEW
          </a>
          <div className="col-xs-11 project-overview">
            <div className="project-cat col-xs-5 col-sm-3 marginLess5">
              <h3>Residential</h3>
              <div className="project-details">
                <h4>
                  Megalith Capital
                </h4>
                <h5>
                  Six Cortlandt Alley
                </h5>
                <p>
                  Manhattan, NY
                </p>
              </div>

              <div className="project-details">
                <h4>
                  JBG SMITH
                </h4>
                <h5>
                  West Half
                </h5>
                <p>
                  Washington, DC
                </p>
              </div>
            </div>

            <div className="project-cat col-xs-5 col-sm-3 marginLess5">
              <h3>Retail</h3>
              <div className="project-details">
                <h4>
                  JBG SMITH
                </h4>
                <h5>
                  The Ballpark</h5>
                <p>
                  Washington, DC
                </p>
              </div>
            </div>

            <div className="project-cat col-xs-5 col-sm-3 marginLess5">
              <h3>COMMERCIAL</h3>
              <div className="project-details">
                <h4>
                  Madison Realty Capital
                </h4>
                <h5>
                  Turbine
                </h5>
                <p>
                  Brooklyn, NY
                </p>
              </div>

              <div className="project-details">
                <h4>
                  Madison Realty Capital
                </h4>
                <h5>
                  Whale
                </h5>
                <p>
                  Brooklyn, NY
                </p>
              </div>

              <div className="project-details">
                <h4>
                  Equity Office
                </h4>
                <h5>
                  Park Avenue Tower
                </h5>
                <p>
                  Manhattan, NY</p>
              </div>
            </div>

            <div className="project-cat col-xs-5 col-sm-3">
              <h3>MIXED-USE</h3>
              <div className="project-details">
                <h4>
                  Normandy Real Estate Partners
                </h4>
                <h5>
                  Founders Park
                </h5>
                <p>
                  Needham, MA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Project;
