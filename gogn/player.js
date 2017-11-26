var video = document.querySelector('video');
var button = document.querySelector('button');
button.addEventListener('click', function () {
  if (video.paused) {
    video.play();
    button.removeChild(button.firstChild);
    button.appendChild(document.createTextNode('Pause'));
  } else {
    video.pause();
    button.removeChild(button.firstChild);
    button.appendChild(document.createTextNode('Play'));
  }
});
