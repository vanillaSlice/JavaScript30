window.addEventListener('load', () => {

  /*
   * Elements
   */

  const sounds = document.querySelectorAll('audio');
  const keys = document.querySelectorAll('.key');

  sounds.forEach(sound => sound.load());

  /*
   * Functions
   */

  function playSound(keyCode) {
    const sound = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
        alert(sound + ' ' + key);
    if (!sound || !key) return;
    sound.currentTime = 0;
    sound.play();
    key.classList.add('playing');
  }

  function removeTransition(e) {
    if (e.propertyName !== 'box-shadow') return;
    this.classList.remove('playing');
  }

  /*
   * Event listeners
   */

  window.addEventListener('keydown', e => playSound(e.keyCode));
  keys.forEach(key => key.addEventListener('mousedown', () => playSound(key.dataset.key)));
  keys.forEach(key => key.addEventListener('touchstart', e => {
    e.preventDefault();
    playSound(key.dataset.key);
  }));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  sounds.forEach(sound => sound.addEventListener('ended', () => {
    let key = document.querySelector(`.key[data-key="${sound.dataset.key}"]`);
    key.classList.remove('playing');
  }));

});
