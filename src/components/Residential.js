import React, { Component } from 'react';
import reaLogo from '../images/REA-Logo.svg';

class Header extends Component{
  render(){
    return(
      <header className="row">
        <nav id="mainNav" className="navbar navbar-default" role="navigation">
          <div className="container">

            <div id="REALogo" className="navbar-header">
              <div id="nav-icon3" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <a className="navbar-brand" href="http://www.realestatearts.com/" onClick="ga('send', 'event', { eventCategory: 'mainNav', eventAction: 'click', eventLabel: 'reaLogo'});">
                <img src={reaLogo} width="100%" className="img-responsive" alt="REA Logo" />
              </a>

            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">

                <li id="navWork" className="active"><a href="index.html" onClick="ga('send', 'event', { eventCategory: 'mainNav', eventAction: 'click', eventLabel: 'homeClick'});">Overview</a></li>
                <li id="navResi"><a href="residential.html" onClick="ga('send', 'event', { eventCategory: 'mainNav', eventAction: 'click', eventLabel: 'residentialClick'});">Residential</a></li>
                <li id="navAbout"><a href="contact.html" onClick="ga('send', 'event', { eventCategory: 'mainNav', eventAction: 'click', eventLabel: 'profileClick'});">Contact</a></li>

              </ul>

            </div>

          </div>
        </nav>
      </header>

    );
  }
}

export default Header;
