window.addEventListener('load', () => {

  /*
   * Elements 
   */

  const words = document.querySelector('.words');
  let p = document.createElement('p');
  words.appendChild(p);

  /*
   * Properties 
   */

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.interimResults = true;

  /*
   * Functions 
   */

  function handleResult(e) {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');
    p.textContent = transcript;
    if (e.results[0].isFinal) {
      p = document.createElement('p');
      words.appendChild(p);
    }
  }

  /*
   * Event listeners 
   */

  recognition.addEventListener('result', handleResult);
  recognition.addEventListener('end', recognition.start);

  /*
   * Init 
   */

  recognition.start();

});