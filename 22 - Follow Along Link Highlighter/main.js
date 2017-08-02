window.addEventListener('load', () => {

  /*
   * Elements 
   */

  const triggers = document.querySelectorAll('a');
  const highlight = document.createElement('span');
  highlight.classList.add('highlight');
  document.body.appendChild(highlight);
  let currentLink;

  /*
   * Functions 
   */

  function highlightLink(link) {
    if (!link) return;
    const linkCoords = link.getBoundingClientRect();
    const coords = {
      width: linkCoords.width,
      height: linkCoords.height,
      top: linkCoords.top + window.scrollY,
      left: linkCoords.left + window.scrollX
    }
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
  }

  /*
   * Event listeners 
   */

  triggers.forEach(link => link.addEventListener('mouseenter', () => {
    currentLink = link;
    highlightLink(currentLink);
  }));
  // make sure we follow the link on resize
  window.addEventListener('resize', () => highlightLink(currentLink));

});