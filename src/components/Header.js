import React, {Component} from 'react';
import reaLogo from '../images/REA-Logo.svg';
import {Navbar, Nav, NavItem} from 'react-bootstrap/lib';
import {Link} from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeNav: '',
      resiNav: '',
      contactNav: ''
    };

  }
  componentDidMount() {
    window.location.pathname === '/' && this.state.homeNav === '' && this.setState({
      homeNav: 'active',
      resiNav: '',
      contactNav: ''
    });
    window.location.pathname === '/residential' && this.state.resiNav === '' && this.setState({
      resiNav: 'active',
      homeNav: '',
      contactNav: ''
    });
    window.location.pathname === '/contact' && this.state.contactNav === '' && this.setState({
      contactNav: 'active',
      homeNav: '',
      resiNav: ''
     });
  }


  componentDidUpdate() {
    window.location.pathname === '/' && this.state.homeNav === '' && this.setState({
      homeNav: 'active',
      resiNav: '',
      contactNav: ''
    });
    window.location.pathname === '/residential' && this.state.resiNav === '' && this.setState({
      resiNav: 'active',
      homeNav: '',
      contactNav: ''
    });
    window.location.pathname === '/contact' && this.state.contactNav === '' && this.setState({
      contactNav: 'active',
      homeNav: '',
      resiNav: ''
     });
  }

  render() {
    const { status } = this.props;
    const { homeNav, resiNav, contactNav } = this.state;

  return (
      <header className={'row ' + status}>
      <Navbar id='mainNav' role='navigation' collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='http://www.realestatearts.com/'>
              <img src={reaLogo} width='100%' className='img-responsive' alt='REA Logo'/>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem componentClass={Link} id='navWork' eventKey={1} href='/' to='/' className={homeNav==='active' ? 'active' : ''}>
              Overview
            </NavItem>
            <NavItem componentClass={Link} eventKey={2} href='/residential' to='/residential' id='navResi' className={resiNav==='active' ? 'active' : ''}>
              Residential
            </NavItem>
            <NavItem componentClass={Link} eventKey={3} href='/contact' to='/contact' id='navAbout' className={contactNav==='active' ? 'active' : ''}>
              Contact
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>);
  }
}

export default Header;
