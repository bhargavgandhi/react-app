import React, {Component} from 'react';
import {Helmet} from "react-helmet";

import Video from './Video';
//import playBtn from '../images/play-btn.png';
import resiPoster from '../images/video-screen-new-resi.png';

class Residential extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoStatus: 'stop',
      videoPoster: 'hidden',
      bodyClass: 'Resi',
      isSafari: false,
      fullHeight: 'full-height',
      PosterImg: '',
      autoPlay: true,
    };

    this.changeVideoStatus = this.changeVideoStatus.bind(this);
  }

  componentWillMount() {  
    let ua = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i),
        browser;
    if (navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Trident.*rv[ :]*11\./i)) {
      browser = "msie";
    }
    else {
      browser = ua[1].toLowerCase();
    }

    if(browser === 'safari') {
      this.state.isSafari === false && this.setState({
        videoPoster: '',
        isSafari: true,
        PosterImg: resiPoster,
        autoPlay: false,
      });
    } else {
      this.state.isSafari === true && this.setState({
        videoPoster: 'hidden',
        isSafari: false,
        PosterImg: '',
        autoPlay: true,
      });
    }
  }
  componentDidUpdate() {
    let ua = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i),
        browser;
    if (navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Trident.*rv[ :]*11\./i)) {
      browser = "msie";
    }
    else {
      browser = ua[1].toLowerCase();
    }

    if(browser === 'safari') {
      this.state.autoPlay && this.setState({
        autoPlay: false,
      });
    }
  }

  componentDidMount() {
    //const baseUrl = process.env.PUBLIC_URL;
    if (typeof window !== 'undefined') {
      // window.location.pathname === (baseUrl + '/') && this.setState({bodyClass: 'Home2'});
      // window.location.pathname === (baseUrl + '/residential') && this.setState({bodyClass: 'Resi', fullHeight: 'full-height',});
      // window.location.pathname === (baseUrl + '/contact') && this.setState({bodyClass: 'Profile', fullHeight: ''});

      const { bodyClass, isSafari, fullHeight } = this.state;

      document.body.classList = '';
      bodyClass !== '' && document.body.classList.add(bodyClass, 'animated', fullHeight !== '' && fullHeight);
      isSafari === true && document.body.classList.add('itsSafari');
    }
  }

  changeVideoStatus = (status) => {
    status === 'play' && this.setState({videoStatus: 'play',});
    status === 'stop' && this.setState({videoStatus: 'stop',});
  }

  render() {
    const { videoStatus, PosterImg, autoPlay, isSafari } = this.state;
    const videoURL = 'https://s3.amazonaws.com/reacdn/REA/REA-residential-animation.mov';

    return (
      <section className='container full-height'>
        <Helmet>
          <title>Real Estate Arts | Residential </title>
        	<meta name="description" content="Real Estate Arts (REA) - Residential" />
        </Helmet>
      <div className='main'>
      <section className='row FullWidth HomeRow1 textAlignCenter' id='homeRow1'>
        <article id='homeHero' className='col-xs-12 col-md-12'>

          <Video
            videoBlock='residential'
            status={videoStatus}
            isSafari={isSafari}
            autoPlay={autoPlay}
            videoURL={videoURL}
            changeVideoStatus={this.changeVideoStatus}
            PosterImg={PosterImg}
          />

          <div className='control'>
            <div className='btmControl'>
              <div className='btnPlay btn' title='Play/Pause video'>
                <span className='icon-play'></span>
              </div>
              <div className='progress-bar'>
                <div className='progress'>
                  <span className='bufferBar'></span>
                  <span className='timeBar'></span>
                </div>
              </div>
              <div className='btnFS btn' title='Switch to full screen'>
                <span className='icon-fullscreen'></span>
              </div>
            </div>
          </div>

          {/*
            <div className={`vidPlayBtn ${videoPoster}`}>
            <a id='playBtn' className={videoPoster} onClick={ () => {
                  this.changeVideoStatus('play');
                }
              }
            >
              <img src={playBtn} alt='play button' width='50'/>
            </a>
          </div>
          */}
        </article>

        <span id='infoEmail'>
          <a className='desk hidden-xs hidden-sm' href='mailto:info@realestatearts.com' target='_blank' rel='noopener noreferrer'>info@realestatearts.com</a>
        </span>

      </section>
    </div>
  </section>
  );
  }
}

export default Residential;
