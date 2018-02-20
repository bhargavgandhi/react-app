import React, {Component} from 'react';
import reaLogo from '../images/REA-Logo.svg';
import Video from './Video';

class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
         videoStatus: "hidden",
         videoPoster: ""
       };
     this.changeVideoStatus = this.changeVideoStatus.bind(this);
  }

  changeVideoStatus = () => {
    this.setState({
      videoStatus: "",
      videoPoster: "hidden"
    })
  }

  render() {
    const { videoStatus, videoPoster } = this.state;

    return (
      <div className="main">
      <section className="row FullWidth HomeRow1 textAlignCenter" id="homeRow1">
        <article id="homeHero" className="col-xs-12 col-md-12">
          <Video status={videoStatus} />

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

          <div id="videoPoster" className={videoPoster}>
            <div className="reaCTA">
              <a id="fullscreen" onClick={this.changeVideoStatus}>
                <h1>We are REA.</h1>
                <p>PLAY REEL</p>
              </a>
            </div>
          </div>
        </article>

        <span id="infoEmail">
          <a className="desk hidden-xs hidden-sm" href="mailto:info@realestatearts.com" target="_blank">info@realestatearts.com</a>
          <a className="mob hidden-lg" href="mailto:info@realestatearts.com" target="_blank">E-mail</a>
        </span>

      </section>
    </div>
  );
  }
}

export default Home;
