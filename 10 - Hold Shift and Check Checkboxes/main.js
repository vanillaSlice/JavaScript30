window.addEventListener('load', () => {

  /*
   * Elements
   */

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  /*
   * Properties 
   */

  let lastChecked;

  /*
   * Functions
   */

  function handleCheck(event) {
    let inBetween = false;
    if (event.shiftKey && this.checked) {
      checkboxes.forEach(checkbox => {
        if (checkbox === this || checkbox === lastChecked) {
          inBetween = !inBetween;
        }
        if (inBetween) {
          checkbox.checked = true;
        }
      });
    }
    lastChecked = this;
  }

  /*
   * Event listeners
   */

  checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

});