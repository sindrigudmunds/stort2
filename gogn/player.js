/*
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
*/


// Búa til DOM elementin
var container = document.crateElement('div');
container.className = 'container';
document.body.appendChild(container);

var videoplayer = document.crateElement('div');
videoplayer.className = 'videoplayer';
container.appendChild(videoplayer);

var video = document.crateElement('div');
video.className = 'video';
videoplayer.appendChild(video);

var nest_play = document.createElement('button');
nest_play.className = 'nest_play';
video.appendChild(nest_play);

var toolbox = document.crateElement('div');
toolbox.className = 'toolbox';
videoplayer.appendChild(toolbox);

var back = document.createElement('button');
back.className = 'back';
var play = document.createElement('button');
play.className = 'play';
var mute = document.createElement('button');
mute.className = 'mute';
var fullscreen = document.createElement('button');
fullscreen.className = 'fullscreen';
var forward = document.createElement('button');
forward.className = 'forward';

toolbox.appendChild(back);
toolbox.appendChild(play);
toolbox.appendChild(mute);
toolbox.appendChild(fullscreen);
toolbox.appendChild(forward);