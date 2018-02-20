import React, {Component} from 'react';

class Video extends Component {
  render() {
    const videoURL = "https://s3.amazonaws.com/reacdn/REA-Holding-Video.mov";
    const status = this.props.status;

    return (
      <video className={status} id="introVideo" width="100%" height="auto" playsInline loop controls>
        <source src={videoURL} type="video/mp4"/>
      </video>
  );
  }
}

export default Video;
