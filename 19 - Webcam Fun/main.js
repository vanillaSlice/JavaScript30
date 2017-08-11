window.addEventListener('load', () => {

  /*
   * Elements 
   */

  const video = document.querySelector('.player');
  const canvas = document.querySelector('.photo');
  const ctx = canvas.getContext('2d');
  const filter = document.querySelector('#filter');
  const strip = document.querySelector('.strip');
  const snap = document.querySelector('.snap');
  const takePhotoButton = document.querySelector('.take-photo');

  /**
   * Properties
   */

  let selectedFilter = 'none';

  /*
   * Functions 
   */

  function getVideo() {
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
      })
      .then(localMediaStream => {
        video.src = window.URL.createObjectURL(localMediaStream);
        video.play();
      })
      .catch(err => {
        console.error('OH NOOOOO', err);
      });
  }

  function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    return setInterval(() => {
      ctx.drawImage(video, 0, 0, width, height);
      let pixels = ctx.getImageData(0, 0, width, height);
      applyFilter(pixels);
      ctx.putImageData(pixels, 0, 0);
    }, 16);
  }

  function takePhoto() {
    // play the sound
    snap.currentTime = 0;
    snap.play();

    // create photo and add download link
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = `<img src=${data} alt="Handsome Man">`
    strip.insertBefore(link, strip.firstChild);
  }

  function applyFilter(pixels) {
    ctx.globalAlpha = 1;
    switch (selectedFilter) {
      case 'rgb-split':
        rgbSplit(pixels);
        break;
      case 'red-effect':
        redEffect(pixels);
        break;
      case 'loveless':
        loveless(pixels);
        break;
    }
  }

  function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
      pixels.data[i - 350] = pixels.data[i];
      pixels.data[i + 100] = pixels.data[i + 1];
      pixels.data[i - 250] = pixels.data[i + 2];
    }
  }

  function redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
      pixels.data[i] += 100;
      pixels.data[i + 1] -= 50;
      pixels.data[i + 2] *= 0.5;
    }
  }

  function loveless(pixels) {
    ctx.globalAlpha = 0.02;
    for (let i = 0; i < pixels.data.length; i += 4) {
      pixels.data[i] += 10;
      pixels.data[i + 1] += 2;
      pixels.data[i + 2] += 5;
    }
  }

  /*
   * Event listeners
   */

  video.addEventListener('canplay', paintToCanvas);
  filter.addEventListener('change', e => selectedFilter = e.target.value);
  takePhotoButton.addEventListener('click', takePhoto);

  /*
   * Init 
   */

  getVideo();

});