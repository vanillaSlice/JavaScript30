window.addEventListener('load', () => {

  /*
   * Elements
   */

  const panels = document.querySelectorAll('.panel');

  /*
   * Functions
   */

  function toggleOpen() {
    this.classList.toggle('open');
  }

  function toggleActive(event) {
    if (event.propertyName === 'flex-grow' || event.propertyName === 'flex') {
      this.classList.toggle('open-active', this.classList.contains('open'));
    }
  }

  /*
   * Event listeners
   */

  panels.forEach(panel => panel.addEventListener('click', toggleOpen));
  panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

});