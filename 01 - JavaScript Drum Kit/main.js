window.addEventListener('load', () => {

  /*
   * Elements
   */

  const sounds = document.querySelectorAll('audio');
  const keys = document.querySelectorAll('.key');

  /*
   * Functions
   */

  function playSound(event) {
    const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!sound || !key) return;
    sound.currentTime = 0;
    sound.play();
    key.classList.add('playing');
  }

  function removeTransition(event) {
    if (event.propertyName !== 'box-shadow') return;
    this.classList.remove('playing');
  }

  function handleSoundEnd() {
    let key = document.querySelector(`.key[data-key="${this.dataset.key}"]`);
    key.classList.remove('playing');
  }

  /*
   * Event listeners
   */

  window.addEventListener('keydown', playSound);
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  sounds.forEach(sound => sound.addEventListener('ended', handleSoundEnd));

});