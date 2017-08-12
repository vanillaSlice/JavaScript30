window.addEventListener('load', () => {

  /*
   * Elements 
   */

  const arrow = document.querySelector('.arrow');
  const speed = document.querySelector('.speed-value');
  const latitude = document.querySelector('.latitude-value');
  const longitude = document.querySelector('.longitude-value');

  navigator.geolocation.watchPosition(data => {
    speed.textContent = data.coords.speed || 0;
    latitude.textContent = data.coords.latitude.toFixed(5);
    longitude.textContent = data.coords.longitude.toFixed(5);
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  }, err => {
    console.error(err);
    alert('Could not access geolocation data');
  });

});