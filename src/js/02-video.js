import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

const onplay = e => {
  timeUpdate = e.seconds;
  console.log(timeUpdate);
  localStorage.setItem('videoplayer-current-time', timeUpdate);
};

player.on('timeupdate', onplay);
