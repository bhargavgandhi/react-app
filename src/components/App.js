import React from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';
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
          <Route exact path='/bg/rea/'render={() => (
            <div>
              <Home />
              <Footer/>
            </div>
            )} />
          <Route path='/bg/rea/residential' render={() => (
            <div>
              <Residential />
              <Footer/>
            </div>
            )} />
          <Route path='/bg/rea/contact' render={() => (
            <div>
              <Contact />
              <Footer hideInfo='true' />
            </div>
            )} />
        </div>
      </BrowserRouter>
    );
}

export default App;
