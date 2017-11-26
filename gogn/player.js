// Búa til DOM elementin
var container = document.crateElement('div');
container.className = 'container';
document.body.appendChild(container);

var videoplayer = document.crateElement('div');
videoplayer.className = 'videoplayer';
container.appendChild(videoplayer);

/*
var goBack = document.createElement('a');
container.appendChild(goBack);
goBack.innerHTML = 'Til baka';
*/

var video = document.crateElement('div');
video.className = 'video';
// Setja innerHTML sem rétt myndband (vísa beint í videos.json?)
videoplayer.appendChild(video);

var nest_play = document.createElement('button');
nest_play.className = 'nest_play';
net_play.innerHTML = <img src="img/play.svg">;
video.appendChild(nest_play);

var toolbox = document.crateElement('div');
toolbox.className = 'toolbox';
videoplayer.appendChild(toolbox);

var back = document.createElement('button');
back.className = 'back';
back.innerHTML = <img src="img/back.svg">;
var play = document.createElement('button');
play.className = 'play';
play.innerHTML = <img src="img/play.svg">;
var mute = document.createElement('button');
mute.className = 'mute';
mute.innerHTML = <img src="img/mute.svg">;
var fullscreen = document.createElement('button');
fullscreen.className = 'fullscreen';
fullscreen.innerHTML = <img src="img/fullscreen.svg">;
var forward = document.createElement('button');
forward.className = 'forward';
forward.innerHTML = <img src="img/next.svg">;

toolbox.appendChild(back);
toolbox.appendChild(play);
toolbox.appendChild(mute);
toolbox.appendChild(fullscreen);
toolbox.appendChild(forward);


// Play og pause (ATH. skipta um mynd)
play.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        play.src = "img/pause.svg";
    } else {
        video.pause();
    }
})


// ATH. láta mute takkann breyta um mynd (unmute.svg)
muteFun(video) {
    if (video.muted = false) {
        video.muted = true;
    } else {
        video.muted = false;
    }
}
mute.addEventListener('click', muteFun(video));


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
