import React, {Component} from 'react';
import Video from './Video';

class Residential extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyClass: "",
      fullHeight: "full-height",
    };
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.location.pathname === "/" && this.setState({bodyClass: "Home2"});
      window.location.pathname === "/residential" && this.setState({bodyClass: "Resi"});
      window.location.pathname === "/contact" && this.setState({bodyClass: "Profile", fullHeight: ""});

      const bodyClass = this.state.bodyClass;
      const fullHeight = this.state.fullHeight;

      document.body.classList = "";
      bodyClass !== "" && document.body.classList.add(bodyClass, "animated", fullHeight !== "" && fullHeight);
    }
  }

  componentWillMount() {
    if (typeof window !== 'undefined') {

      window.location.pathname === "/" && this.setState({bodyClass: "Home2"});
      window.location.pathname === "/residential" && this.setState({bodyClass: "Resi"});
      window.location.pathname === "/contact" && this.setState({bodyClass: "Profile", fullHeight: ""});

      const bodyClass = this.state.bodyClass;
      const fullHeight = this.state.fullHeight;

      document.body.classList = "";
      bodyClass !== "" && document.body.classList.add(bodyClass, "animated", fullHeight !== "" && fullHeight);
    }

  }

  render() {
    const videoURL = "https://s3.amazonaws.com/reacdn/REA/REA-residential-animation.mov";

    return (
      <div className="main">
      <section className="row FullWidth HomeRow1 textAlignCenter" id="homeRow1">
        <article id="homeHero" className="col-xs-12 col-md-12">
          <Video autoPlay="true" videoURL={videoURL} />

          <div className="control">
            <div className="btmControl">
              <div className="btnPlay btn" title="Play/Pause video">
                <span className="icon-play"></span>
              </div>
              <div className="progress-bar">
                <div className="progress">
                  <span className="bufferBar"></span>
                  <span className="timeBar"></span>
                </div>
              </div>
              <div className="btnFS btn" title="Switch to full screen">
                <span className="icon-fullscreen"></span>
              </div>
            </div>
          </div>

          <div className="vidPlayBtn">
            <a id="playBtn">
              <img src="assets/images/play-btn.png" alt="play button" width="50"/>
            </a>
          </div>
        </article>

        <span id="infoEmail">
          <a className="desk hidden-xs hidden-sm" href="mailto:info@realestatearts.com" target="_blank" rel="noopener noreferrer">info@realestatearts.com</a>
          <a className="mob hidden-lg" href="mailto:info@realestatearts.com" target="_blank" rel="noopener noreferrer">E-mail</a>
        </span>

      </section>
    </div>
  );
  }
}

export default Residential;
