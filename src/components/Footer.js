import React, { Component } from 'react';

class Footer extends Component{
  render(){
    return(
      <footer className="row">
  			<article className="socialIcons col-xs-12">
  				<a href="https://twitter.com/RealEstateArts" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
  				<a href="https://www.instagram.com/realestatearts/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
  				<a href="https://www.linkedin.com/company/real-estate-arts" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
  			</article>
  		</footer>
    );
  }
}

export default Footer;
