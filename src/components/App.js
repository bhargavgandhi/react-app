import React, {Component} from 'react';
import logo from '../images/logo.svg';
import '../styles/REAStyle.css';
import Header from './Header';
import Project from './Project';
import Home from './Home';
import Footer from './Footer';

class App extends Component {
  componentDidMount() {
    document.body.classList.add('Home2', 'full-height');
  }
  render() {
    return (
      <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
  }
}

export default App;
