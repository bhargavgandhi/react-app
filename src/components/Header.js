import React, {Component} from 'react';
import reaLogo from '../images/REA-Logo.svg';
import {Navbar, Nav, NavItem} from 'react-bootstrap/lib';
import {Link} from 'react-router-dom';

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
    //const baseUrl = process.env.PUBLIC_URL;
    window.location.pathname === '/bg/rea/' && this.state.homeNav === '' && this.setState({
      homeNav: 'active',
      resiNav: '',
      contactNav: ''
    });
    window.location.pathname === '/bg/rea/residential' && this.state.resiNav === '' && this.setState({
      resiNav: 'active',
      homeNav: '',
      contactNav: ''
    });
    window.location.pathname === '/bg/rea/contact' && this.state.contactNav === '' && this.setState({
      contactNav: 'active',
      homeNav: '',
      resiNav: ''
     });
  }


  componentDidUpdate() {

    window.location.pathname === '/bg/rea/' && this.state.homeNav === '' && this.setState({
      homeNav: 'active',
      resiNav: '',
      contactNav: ''
    });
    window.location.pathname === '/bg/rea/residential' && this.state.resiNav === '' && this.setState({
      resiNav: 'active',
      homeNav: '',
      contactNav: ''
    });
    window.location.pathname === '/bg/rea/contact' && this.state.contactNav === '' && this.setState({
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
            <Link to='/bg/rea/'>
              <img src={reaLogo} width='100%' className='img-responsive' alt='REA Logo'/>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem componentClass={Link} eventKey={1} href='/' to='/bg/rea/' className={homeNav==='active' ? 'active' : ''}>
              Overview
            </NavItem>
            <NavItem componentClass={Link} eventKey={2} href='/residential' to='/bg/rea/residential' id='navResi' className={resiNav==='active' ? 'active' : ''}>
              Residential
            </NavItem>
            <NavItem componentClass={Link} eventKey={3} href='/contact' to='/bg/rea/contact' id='navAbout' className={contactNav==='active' ? 'active' : ''}>
              Contact
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>);
  }
}

export default Header;
