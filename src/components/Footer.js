import React, { Component } from 'react';

class Footer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      infoClass: '',
    };
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.location.pathname === '/contact' && this.setState({infoClass: 'hide'});
      window.location.pathname === '/' && this.setState({infoClass: ''});
      window.location.pathname === '/Resi' && this.setState({infoClass: ''});
    }
  }
  componentDidUpdate() {
    if (typeof window !== 'undefined') {
      window.location.pathname === '/contact' && this.state.infoClass === '' && this.setState({infoClass: 'hide'});
      window.location.pathname !== '/contact' && this.state.infoClass === 'hide' && this.setState({infoClass: ''});
    }
  }

  render(){
    const { infoClass } = this.state;

    return(
      <footer className='row'>
        <span id='infoEmail' className={infoClass}>
          <a className='mob hidden-lg' href='mailto:info@realestatearts.com' target='_blank' rel='noopener noreferrer'>E-mail</a>
        </span>
  			<article className='socialIcons col-xs-12'>
  				<a href='https://twitter.com/RealEstateArts' target='_blank' rel='noopener noreferrer'><i className='fa fa-twitter'></i></a>
  				<a href='https://www.instagram.com/realestatearts/' target='_blank' rel='noopener noreferrer'><i className='fa fa-instagram'></i></a>
  				<a href='https://www.linkedin.com/company/real-estate-arts' target='_blank' rel='noopener noreferrer'><i className='fa fa-linkedin'></i></a>
  			</article>
  		</footer>
    );
  }
}

export default Footer;
