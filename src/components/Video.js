import React, {Component} from 'react';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoBlock: this.props.videoBlock,
      autoPlay: this.props.autoPlay,
    };

    this.endVideo = this.endVideo.bind(this);
    this.playVideo = this.playVideo.bind(this);
  }

  playVideo = () => {
    this.refs.vidRef && this.refs.vidRef.play();
  }

  endVideo = () => {
    this.refs.vidRef && this.refs.vidRef.pause();
    this.refs.vidRef && (this.refs.vidRef.currentTime = 0);

    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
  // componentDidMount() {
  //   const baseUrl = process.env.PUBLIC_URL;
  //
  //   window.location.pathname === (baseUrl + '/') && this.state.videoBlock === '' && this.setState({videoBlock: 'home'});
  //   window.location.pathname === (baseUrl + '/residential') && this.state.videoBlock === '' && this.setState({videoBlock: 'residential'});
  // }

  // componentDidUpdate() {
  //   const baseUrl = process.env.PUBLIC_URL;
  //
  //   window.location.pathname === (baseUrl + '/') && this.state.videoBlock === '' && this.setState({videoBlock: 'home'});
  //   window.location.pathname === (baseUrl + '/residential') && this.state.videoBlock === '' && this.setState({videoBlock: 'residential'});
  // }

  render() {
    const {status, changeVideoStatus, videoURL, PosterImg } = this.props;
    status === 'play' && this.playVideo();

    const { videoBlock, autoPlay, } = this.state;

    return (
      <div>
      {
        videoBlock === 'home' &&
        <video
          ref='vidRef'
          className={status}
          id='introVideo'
          width='100%'
          height='auto'
          autoPlay={autoPlay}
          playsInline
          controls
          onEnded={() => {
            this.endVideo();
            changeVideoStatus('stop');
          }
        }>
          <source src={videoURL} type='video/mp4'/>
        </video>
      }
      {
        videoBlock === 'residential' &&
        <video
          ref='vidRef'
          className={status}
          id='introVideo'
          width='100%'
          height='auto'
          onClick={ () => changeVideoStatus(!status)}
          poster={PosterImg && PosterImg}
          autoPlay={autoPlay}
          playsInline
          loop
          controls
          onEnded={() => {
            this.endVideo()
          }
        }>
          <source src={videoURL} type='video/mp4'/>
        </video>
      }
      </div>
    );
  }
}

export default Video;
