import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import '../styles/sass/REAStyle.css';
import Header from './Header';
import Project from './Project';
import Home from './Home';
import Residential from './Residential';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectBlock: "Hide",
      headerStatus: ""
    };

    this.changeProjectStatus = this.changeProjectStatus.bind(this);
  }

  componentWillMount() {
    setTimeout(function() {
      window.location.pathname === "/" && this.state.projectBlock === "Hide" && this.setState({projectBlock: "Show", headerStatus: "hide-header"});
    }.bind(this), 1000);
  }

  changeProjectStatus = () => {
    this.setState({projectBlock: "hidden", headerStatus: ""});
    if (typeof window !== 'undefined') {
      document.body.classList.remove("full-height");
    }
  }

  render() {
    const {projectBlock, headerStatus} = this.state;

    return (
      <BrowserRouter>
        <div className="App">
          <Header status={headerStatus}/>
          <Route exact path="/" render={() => (
            <div>
              <Project status={projectBlock} changeProjectStatus={this.changeProjectStatus}/>
              <Home projectStatus={projectBlock} />
            </div>
          )}/>

          <Route path="/residential" render={({history}) => (<Residential/>)}/>

          <Route path="/contact" render={({history}) => (<Contact/>)}/>
          <Footer/>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
