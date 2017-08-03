window.addEventListener('load', () => {

  /*
   * Elements 
   */

  let utterance;
  let voices = [];
  const voicesDropdown = document.querySelector('[name="voice"]');
  const rate = document.querySelector('#rate');
  const pitch = document.querySelector('#pitch');
  const text = document.querySelector('[name="text"]');
  const speakButton = document.querySelector('#speak');
  const stopButton = document.querySelector('#stop');

  /*
   * Functions 
   */

  function populateVoices() {
    voices = speechSynthesis.getVoices();
    const voiceOptions = voices
      .filter(voice => voice.lang.includes('en'))
      .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
      .join('');
    voicesDropdown.innerHTML = voiceOptions;
  }

  function toggle(startOver = true) {
    speechSynthesis.cancel();
    if (startOver) {
      utterance = new SpeechSynthesisUtterance();
      utterance.voice = voices.find(voice => voice.name === voicesDropdown.value);
      utterance.rate = rate.value;
      utterance.pitch = pitch.value;
      utterance.text = text.value;
      speechSynthesis.speak(utterance);
    }
  }

  /*
   * Event listeners 
   */

  populateVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.addEventListener('voiceschanged', populateVoices);
  }
  voicesDropdown.addEventListener('change', toggle);
  rate.addEventListener('change', toggle);
  pitch.addEventListener('change', toggle);
  text.addEventListener('change', toggle);
  speakButton.addEventListener('click', toggle);
  stopButton.addEventListener('click', () => toggle(false));

});