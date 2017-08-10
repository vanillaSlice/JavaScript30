window.addEventListener('load', () => {

  /*
   * Elements
   */

  const hero = document.querySelector('.hero');
  const text = hero.querySelector('h1');

  /*
   * Properties 
   */

  const walk = 100; // 100px

  /*
   * Functions
   */

  function shadow(e) {
    // get x and y
    let x = e.offsetX;
    let y = e.offsetY;
    if (e.type === 'touchmove') {
      const touches = e.targetTouches[0];
      x = touches.clientX;
      y = touches.clientY;
    } else {
      x = e.offsetX;
      y = e.offsetY;
      if (this != e.target) {
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
      }
    }

    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0, 255, 0, 0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0, 0, 255, 0.7)`;
  }

  /*
   * Event listeners
   */

  hero.addEventListener('mousemove', shadow);
  hero.addEventListener('touchmove', shadow);

});