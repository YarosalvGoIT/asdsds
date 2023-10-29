import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localStorageKey = 'videoplayer-current-time';

/**
 * get currentTime from localStorage
 */
const currentTime = localStorage.getItem(localStorageKey) ?? 0;

/**
 * set currentTime
 */
player.setCurrentTime(currentTime);

/**
 * save currentTime to localStorage
 * @param data
 */
const saveTime = function (data) {
  localStorage.setItem(localStorageKey, Math.round(data.seconds));
};

/**
 * add event listener on timeupdate
 */
player.on('timeupdate', throttle(saveTime, 1000));
