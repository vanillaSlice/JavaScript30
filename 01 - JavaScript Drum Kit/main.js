(function () {

  const keys = document.querySelectorAll('.key');

  window.addEventListener('keydown', playSound);

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
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

}());