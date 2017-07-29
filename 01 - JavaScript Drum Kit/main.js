window.addEventListener('load', () => {

  /*
   * Elements
   */

  const sounds = document.querySelectorAll('audio');
  const keys = document.querySelectorAll('.key');

  /*
   * Functions
   */

  function playSound(keyCode) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (!audio || !key) return;
    audio.currentTime = 0;
    audio.play();
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
  }), false);
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  sounds.forEach(sound => sound.addEventListener('ended', () => {
    let key = document.querySelector(`.key[data-key="${sound.dataset.key}"]`);
    key.classList.remove('playing');
  }));

});