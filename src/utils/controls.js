function playVideo() {
  const introVideo = document.getElementById('introVideo');
  const videoPoster = document.getElementById('videoPoster');
  const control = document.getElementsByClassName('control')[0];
  const caption = document.getElementsByClassName('caption')[0];

  control.style.display = 'block';
  caption.style.display = 'block';

  introVideo.play();
  introVideo.classList.remove('hide');
  videoPoster.classlist.add('hide');
}

function stopVideo() {

  const introVideo = document.getElementById('introVideo');
  const videoPoster = document.getElementById('videoPoster');
  const control = document.getElementsByClassName('control')[0];
  const caption = document.getElementsByClassName('caption')[0];

  control.style.display = 'none';
  caption.style.display = 'none';

  introVideo.pause();
  introVideo.currentTime = 0;

  introVideo.classList.add('hide');
  videoPoster.classList.remove('hide');

}

function fadeIn(el) {
  el.style.opacity = 0;

  var last = + new Date();
  var tick = function() {
    el.style.opacity = + el.style.opacity + (new Date() - last) / 400;
    last = + new Date();

    if (+ el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}

function customControls() {
  //INITIALIZE
  const video = document.getElementById('introVideo');
  const control = document.getElementsByClassName('control')[0];
  const caption = document.getElementsByClassName('caption')[0];
  const bufferBar = document.getElementsByClassName('bufferBar')[0];
  const timeBar = document.getElementsByClassName('timeBar')[0];
  const current = document.getElementsByClassName('current')[0];
  const duration = document.getElementsByClassName('duration')[0];
  const btnPlay = document.getElementsByClassName('btnPlay')[0];
  const btnFS = document.getElementsByClassName('btnFS')[0];
  const sound = document.getElementsByClassName('sound')[0];
  const volumeBar = document.getElementsByClassName('volumeBar')[0];
  const loading = document.getElementsByClassName('loading')[0];
  const progress = document.getElementsByClassName('progress')[0];
  const volume = document.getElementsByClassName('volume')[0];

  //remove default control when JS loaded
  video[0].removeAttribute("controls");

  //before everything get started
  video.on('loadedmetadata', function() {

    //set video properties
    current.innerHTML = timeFormat(0);
    duration.innerHTML = timeFormat(video[0].duration);
    updateVolume(0, 0.7);

    //start to get video buffering data
    setTimeout(startBuffer, 150);

    //bind video events
    video.hover(function() {
      fadeIn(control);
      fadeIn(caption);
      control.style.display = 'block';
      caption.style.display = 'block';
    }, function() {
      if (!volumeDrag && !timeDrag) {
        control.style.display = 'none';
        caption.style.display = 'none';
      }
    })
  });

  //display video buffering bar
  var startBuffer = function() {
    var currentBuffer = video[0].buffered.end(0);
    var maxduration = video[0].duration;
    var perc = 100 * currentBuffer / maxduration;
    bufferBar.style.width = perc + '%';

    if (currentBuffer < maxduration) {
      setTimeout(startBuffer, 500);
    }
  };

  //display current video play time
  video.on('timeupdate', function() {
    var currentPos = video[0].currentTime;
    var maxduration = video[0].duration;
    var perc = 100 * currentPos / maxduration;
    timeBar.style.width = perc + '%';
    current.innerHTML = timeFormat(currentPos);
  });

  //CONTROLS EVENTS
  //video screen and play button clicked
  //video.on('click', function() { playStop(); } );
  btnPlay.on('click', function() {
    playpause();
  });

  var playpause = function() {
    if (video[0].paused || video[0].ended) {
      btnPlay.addClass('paused');
      btnPlay.find('.icon-play').addClass('icon-pause').removeClass('icon-play');
      video[0].play();
    } else if (video[0].play) {
      btnPlay.removeClass('paused');
      btnPlay.find('.icon-pause').removeClass('icon-pause').addClass('icon-play');
      video[0].pause();
    }
  };

  var playStop = function() {
    if (video[0].paused || video[0].ended) {
      btnPlay.addClass('paused');
      btnPlay.find('.icon-play').addClass('icon-pause').removeClass('icon-play');
      playVideo();
    } else {
      btnPlay.removeClass('paused');
      btnPlay.find('.icon-pause').removeClass('icon-pause').addClass('icon-play');
      stopVideo();
    }
  };

  //fullscreen button clicked
  // btnFS.on('click', function() {
  //   if ($.isFunction(video[0].webkitEnterFullscreen)) {
  //     video[0].webkitEnterFullscreen();
  //   } else if ($.isFunction(video[0].mozRequestFullScreen)) {
  //     video[0].mozRequestFullScreen();
  //   } else {
  //     alert('Your browsers doesn\'t support fullscreen');
  //   }
  // });

  //sound button clicked
  sound.click(function() {
    video[0].muted = !video[0].muted;
    this.toggleClass('muted');
    if (video[0].muted) {
      volumeBar.css('width', 0);
    } else {
      volumeBar.css('width', video[0].volume * 100 + '%');
    }
  });

  //VIDEO EVENTS
  //video canplay event
  video.on('canplay', function() {
    loading.fadeOut(100);
  });

  //video canplaythrough event
  //solve Chrome cache issue
  var completeloaded = false;
  video.on('canplaythrough', function() {
    completeloaded = true;
  });

  //video ended event
  video.on('ended', function() {
    btnPlay.removeClass('paused');
    stopVideo();
  });

  //video seeking event
  video.on('seeking', function() {
    //if video fully loaded, ignore loading screen
    if (!completeloaded) {
      loading.fadeIn(200);
    }
  });

  //video seeked event
  video.on('seeked', function() {});

  //video waiting for more data event
  video.on('waiting', function() {
    loading.fadeIn(200);
  });

  //VIDEO PROGRESS BAR
  //when video timebar clicked
  var timeDrag = false;/* check for drag event */
  progress.on('mousedown', function(e) {
    timeDrag = true;
    updatebar(e.pageX);
  });
  document.on('mouseup', function(e) {
    if (timeDrag) {
      timeDrag = false;
      updatebar(e.pageX);
    }
  });
  document.on('mousemove', function(e) {
    if (timeDrag) {
      updatebar(e.pageX);
    }
  });
  var updatebar = function(x) {
    var progress = progress;

    //calculate drag position
    //and update video currenttime
    //as well as progress bar
    var maxduration = video[0].duration;
    var position = x - progress.offset().left;
    var percentage = 100 * position / progress.width();
    if (percentage > 100) {
      percentage = 100;
    }
    if (percentage < 0) {
      percentage = 0;
    }
    timeBar.css('width', percentage + '%');
    video[0].currentTime = maxduration * percentage / 100;
  };

  //VOLUME BAR
  //volume bar event
  var volumeDrag = false;
  volume.on('mousedown', function(e) {
    volumeDrag = true;
    video[0].muted = false;
    sound.removeClass('muted');
    updateVolume(e.pageX);
  });
  document.on('mouseup', function(e) {
    if (volumeDrag) {
      volumeDrag = false;
      updateVolume(e.pageX);
    }
  });
  document.on('mousemove', function(e) {
    if (volumeDrag) {
      updateVolume(e.pageX);
    }
  });
  var updateVolume = function(x, vol) {
    var volume = volume;
    var percentage;
    //if only volume have specificed
    //then direct update volume
    if (vol) {
      percentage = vol * 100;
    } else {
      var position = x - volume.offset().left;
      percentage = 100 * position / volume.width();
    }

    if (percentage > 100) {
      percentage = 100;
    }
    if (percentage < 0) {
      percentage = 0;
    }

    //update volume bar and video volume
    volumeBar.css('width', percentage + '%');
    video[0].volume = percentage / 100;

    //change sound icon based on volume
    if (video[0].volume == 0) {
      sound.removeClass('sound2').addClass('muted');
    } else if (video[0].volume > 0.5) {
      sound.removeClass('muted').addClass('sound2');
    } else {
      sound.removeClass('muted').removeClass('sound2');
    }

  };

  //Time format converter - 00:00
  var timeFormat = function(seconds) {
    var m = Math.floor(seconds / 60) < 10
      ? "0" + Math.floor(seconds / 60)
      : Math.floor(seconds / 60);
    var s = Math.floor(seconds - (m * 60)) < 10
      ? "0" + Math.floor(seconds - (m * 60))
      : Math.floor(seconds - (m * 60));
    return m + ":" + s;
  };

}
