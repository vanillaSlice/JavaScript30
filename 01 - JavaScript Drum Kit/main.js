window.addEventListener('load', () => {

  /*
   * Elements
   */

  const modal = document.querySelector('.modal');
  const ok = document.querySelector('.ok');
  const sounds = document.querySelectorAll('audio');
  const keys = document.querySelectorAll('.key');

  /*
   * Properties 
   */

  let soundsEnabled = false;

  /*
   * Functions
   */

  function handleOkClick() {
    enableSounds();
    modal.remove();
  }

  function enableSounds() {
    if (soundsEnabled) return;
    sounds.forEach(sound => {
      sound.volume = 0;
      sound.play().then(() => {
        sound.pause();
        sound.currentTime = 0;
        sound.volume = 1;
        soundsEnabled = true;
      });
    });
  }

  function handleKeyDown(e) {
    playSound(e.keyCode);
  }

  function playSound(keyCode) {
    if (!soundsEnabled) return;
    const sound = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (!sound || !key) return;
    sound.currentTime = 0;
    sound.play();
    key.classList.add('playing');
  }

  function handleKeyPress(e) {
    e.preventDefault();
    e.stopPropagation();
    playSound(this.dataset.key);
  }

  function handleTransitionEnd(e) {
    if (e.propertyName !== 'background-color') return;
    this.classList.remove('playing');
  }

  function handleSoundEnd() {
    let key = document.querySelector(`.key[data-key="${this.dataset.key}"]`);
    key.classList.remove('playing');
  }

  /*
   * Event listeners
   */

  ok.addEventListener('click', handleOkClick);
  window.addEventListener('keydown', handleKeyDown);
  keys.forEach(key => key.addEventListener('mousedown', handleKeyPress, true));
  keys.forEach(key => key.addEventListener('touchstart', handleKeyPress, true));
  keys.forEach(key => key.addEventListener('transitionend', handleTransitionEnd));
  sounds.forEach(sound => sound.addEventListener('ended', handleSoundEnd));

});