(() => {

  const keys = document.querySelectorAll('.key');

  window.addEventListener('keydown', e => playSound(e.keyCode));
  keys.forEach(key => key.addEventListener('mousedown', () => playSound(key.dataset.key)));
  keys.forEach(key => key.addEventListener('touchstart', () => playSound(key.dataset.key)));

  function playSound(keyCode) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (!audio || !key) return; // stop function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
  }

  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip it if it's not a transform
    this.classList.remove('playing');
  }

})();