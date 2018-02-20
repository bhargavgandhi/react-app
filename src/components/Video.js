import React, {Component} from 'react';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoBlock: ''
    };

    this.endVideo = this.endVideo.bind(this);
    this.playVideo = this.playVideo.bind(this);
  }

  playVideo = () => {
    this.refs.vidRef.play();
  }

  endVideo = () => {
    this.refs.vidRef.pause();
    this.refs.vidRef.currentTime = 0

    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
  componentDidMount() {
    window.location.pathname === "/" && this.state.videoBlock === "" && this.setState({videoBlock: 'home'});
    window.location.pathname === "/residential" && this.state.videoBlock === "" && this.setState({videoBlock: 'residential'});
  }

  componentDidUpdate() {
    window.location.pathname === "/" && this.state.videoBlock === "" && this.setState({videoBlock: 'home'});
    window.location.pathname === "/residential" && this.state.videoBlock === "" && this.setState({videoBlock: 'residential'});
  }

  render() {
    const {status, changeVideoStatus, videoURL, autoPlay} = this.props;
    status === "play" && this.playVideo();

    const {videoBlock} = this.state;

    return (
      <div>
      {
        videoBlock === 'home' &&
        <video ref="vidRef" className={status} id="introVideo" width="100%" height="auto" autoPlay={autoPlay} playsInline controls onEnded={() => {
          this.endVideo();
          changeVideoStatus("stop");
        }
      }>
            <source src={videoURL} type="video/mp4"/>
        </video>
      }
      {
        videoBlock === 'residential' &&
        <video ref="vidRef" className={status} id="introVideo" width="100%" height="auto" autoPlay={autoPlay} playsInline loop controls onEnded={() => {this.endVideo()}}>
            <source src={videoURL} type="video/mp4"/>
        </video>
      }
      </div>
    );
  }
}

export default Video;
