import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import '../styles/sass/REAStyle.css';
import Header from './Header';
import Home from './Home';
import Residential from './Residential';
import Contact from './Contact';
import Footer from './Footer';

function App(){
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" render={({history}) => (<Home />)}/>
          <Route path="/residential" render={({history}) => (<Residential />)}/>
          <Route path="/contact" render={({history}) => (<Contact />)}/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
}

export default App;
