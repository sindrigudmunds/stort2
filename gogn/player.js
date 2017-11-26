// Búa til DOM elementin í <body>
var container = document.crateElement('div');
container.className = 'container';
document.body.appendChild(container);

var videoplayer = document.crateElement('div');
videoplayer.className = 'videoplayer';
container.appendChild(videoplayer);

var goBack = document.createElement('a');
goBack.innerHTML = 'Til baka';
// Ath. laga slóð
goBack.href = "###";
container.appendChild(goBack);

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


/**  Virkni á takkana  **/

// Play og pause
play.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        play.src = "img/pause.svg";
    } else {
        video.pause();
        play.src = "img/play.svg";
    }
})


// Mute takkinn
mute.addEventListener('click', function() {
    if (video.muted = false) {
        video.muted = true;
        mute.src = "img/unmute.svg";
    } else {
        video.muted = false;
        mute.src = "img/mute.svg";
    }
});


// Fullscreen
