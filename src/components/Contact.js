import React, {Component} from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyClass: "",
    };
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.location.pathname === "/contact" && this.setState({bodyClass: "Profile"});

      const bodyClass = this.state.bodyClass;

      document.body.classList = "";
      bodyClass !== "" && document.body.classList.add(bodyClass, "animated");
    }
  }

  componentWillMount() {
    if (typeof window !== 'undefined') {
      window.location.pathname === "/contact" && this.setState({bodyClass: "Profile"});

      const bodyClass = this.state.bodyClass;

      document.body.classList = "";
      bodyClass !== "" && document.body.classList.add(bodyClass, "animated");
    }

  }

  render() {
    const pMarginTop = {
      marginTop: 0
    };
    const pMarginTop5 = {
      marginTop: "5px"
    };

  return (<div className="main">
      <section className="row FullWidth profileMain">
        <article className="col-xs-12 col-sm-11">
          <h1>We are REA.</h1>
          <p className="mobMarginBtmNone">
            A collective of international brand specialists shaping dialogue and design through culture, place and art.
          </p>
        </article>

        <span id="infoEmail" className="hidden-xs hidden-sm">
          <a href="mailto:info@realestatearts.com" target="_blank" rel="noopener noreferrer">info@realestatearts.com</a>
        </span>

      </section>
      <section className="row FullWidth profileCopy">
        <article className="col-xs-12 hidden-md hidden-lg">
          <p style={pMarginTop}>
            If you would like to learn more about us or have a business opportunity you’d like to discuss please contact:
          </p>
        </article>
        <article className="marginRightTab1 col-xs-12 col-sm-5 col-md-3">
          <p>
            New York
            <br/>
            132 West 31st Street
            <br/>
            31 Penn Plaza, Suite 602
            <br/>
            New York, NY 10001
            <br/>
            <a href="tel:212.226.3300">212.226.3300</a>
          </p>
          <p>
            Washington DC
            <br/>
            1348 Florida Avenue NW
            <br/>
            Washington DC 20009
            <br/>
            <a href="tel:202.702.8898">202.702.8898</a>
          </p>
        </article>
        <article className="marginRight5 col-xs-12 col-sm-6 col-md-4">
          <p className="hidden-xs hidden-sm">
            If you would like to learn more about us or have a business opportunity you’d like to discuss please contact:
          </p>

          <p>
            New York
            <a href="mailto:hellonyc@realestatearts.com" target="_blank" rel="noopener noreferrer">hellonyc@realestatearts.com</a>
          </p>
          <p>
            Washington DC
            <a href="mailto:hellodc@realestatearts.com" target="_blank" rel="noopener noreferrer">hellodc@realestatearts.com</a>
          </p>
          <p>
            Employment
            <a href="mailto:careers@realestatearts.com" target="_blank" rel="noopener noreferrer">careers@realestatearts.com</a>
          </p>
        </article>
        <article className="col-xs-12 col-sm-6 col-md-3 marginTopTab3">
          <p>
            REA ©2018.
          </p>
          <p style={pMarginTop5}>
            All Rights Reserved.
          </p>
        </article>
      </section>
    </div>);
  }
}

export default Contact;
