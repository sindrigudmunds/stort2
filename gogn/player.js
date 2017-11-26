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

//getElementsByClassName("fullscreen").addEventListener("click", getElementsByClassName("videoplayer").requestFullScreen());


// Búa til DOM element
var videoplayer = document.createElement('div');
videoplayer.className = 'videoplayer';
document.body.appendChild(videoplayer);

var video = document.createElement('div');
video.className = 'video';
var toolbox = document.createElement('div');
toolbox.className = 'toolbox';
videoplayer.appendChild(video);
videoplayer.appendChild(toolbox);

var back = document.createElement('button');
back.className = 'back';

var play = document.createElement('button');
play.className = 'play';

var mute = document.createElement('button');
mute.className = 'mute';

var fullscreen = document.createElement('button');
fullscreen.className = 'fullscreen';

var fullscreen = document.createElement('button');
fullscreen.className = 'fullscreen';