import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

const onplay = e => {
  let timeUpdate = e.seconds;
  console.log(timeUpdate);
  localStorage.setItem('videoplayer-current-time', timeUpdate);
};

var throttledUpdatePlaybackTime = _.throttle(onplay, 1000);
let savedTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(savedTime);
console.log(savedTime);

player.on('timeupdate', throttledUpdatePlaybackTime);
