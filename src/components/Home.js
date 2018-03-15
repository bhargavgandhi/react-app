import React, {Component} from 'react';
import Video from './Video';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoStatus: 'hidden',
      videoPoster: '',
      bodyClass: 'Home2',
      fullHeight: 'full-height',
    };
    this.changeVideoStatus = this.changeVideoStatus.bind(this);
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.location.pathname === '/' && this.setState({bodyClass: 'Home2'});
      window.location.pathname === '/residential' && this.setState({bodyClass: 'Resi'});
      window.location.pathname === '/contact' && this.setState({bodyClass: 'Profile'});

      const bodyClass = this.state.bodyClass;
      const fullHeight = this.state.fullHeight;

      document.body.classList = '';
      bodyClass !== '' && document.body.classList.add(bodyClass, 'animated', 'fadeIn', fullHeight !== '' && fullHeight);
    }
  }

  changeVideoStatus = (status) => {
    status === 'play' && this.setState({videoStatus: 'play', videoPoster: 'hidden'});
    status === 'stop' && this.setState({videoStatus: 'hidden', videoPoster: ''});
  }

  render() {
    const {videoStatus, videoPoster} = this.state;
    const videoURL = 'https://s3.amazonaws.com/reacdn/REA-Holding-Video.mov';

    return (
      <section className='container full-height'>
      <div className='main'>
      <section className='row FullWidth HomeRow1 textAlignCenter' id='homeRow1'>
        <article id='homeHero' className='col-xs-12 col-md-12'>
          <Video status={videoStatus} changeVideoStatus={this.changeVideoStatus} videoURL={videoURL} />

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

          <div id='videoPoster' className={videoPoster}>
            <div className='reaCTA'>
              <a id='fullscreen' onClick={() => this.changeVideoStatus('play')}>
                <h1>We are REA.</h1>
                <p>PLAY REEL</p>
              </a>
            </div>
          </div>
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

export default Home;
