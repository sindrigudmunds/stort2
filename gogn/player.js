// Búa til DOM elementin í <body>
var container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

var request = new XMLHttpRequest();
 request.open("GET", "videos.json", true);
 request.send();
 request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log("XMLHttpRequest");
        var response = JSON.parse(request.responseText);

        for (var i = 0; i < response.videos.length; i++) {
          if (videoID === "?id=" + response.videos[i].id) {
            setVideo(response.videos[i].title, response.videos[i].video);
          }
        }
    }
  };

var videoplayer = document.createElement('div');
videoplayer.className = 'videoplayer';
container.appendChild(videoplayer);

var goBack = document.createElement('a');
goBack.innerHTML = 'Til baka';
goBack.href = "index.html";
container.appendChild(goBack);

var videoel = document.createElement('div');
videoel.className = 'video';

videoplayer.appendChild(videoel);

var video = document.createElement('video');
videoel.appendChild(video);

var videoID = document.location.search;

function setVideo(title, vid){
  var titill = document.createElement('h1');
  titill.appendChild(document.createTextNode(title));
  console.log(titill);
  container.appendChild(titill);
  video.setAttribute("src", vid)
}


var nest_play = document.createElement('button');
nest_play.className = 'nest_play';
nest_play.id = 'nest_play';
nest_play.innerHTML = "<img src=\"img/play.svg\"></img>";
video.appendChild(nest_play);

var toolbox = document.createElement('div');
toolbox.className = 'toolbox';
videoplayer.appendChild(toolbox);

var back = document.createElement('button');
back.className = 'back';
back.innerHTML = "<img src=\"img/back.svg\">";
var play = document.createElement('button');
play.className = 'play';
play.innerHTML = "<img src=\"img/play.svg\">";
var mute = document.createElement('button');
mute.className = 'mute';
mute.innerHTML = "<img src=\"img/mute.svg\">";
var fullscreen = document.createElement('button');
fullscreen.className = 'fullscreen';
fullscreen.innerHTML = "<img src=\"img/fullscreen.svg\">";
var forward = document.createElement('button');
forward.className = 'forward';
forward.innerHTML = "<img src=\"img/next.svg\">";

toolbox.appendChild(back);
toolbox.appendChild(play);
toolbox.appendChild(mute);
toolbox.appendChild(fullscreen);
toolbox.appendChild(forward);


/**  Virkni á takkana  **/

// Overlay á nest_play takkann
nest_play.style.display = "block";

nest_play.addEventListener('click', function() {
    nest_play.style.display = "none";
    video.play();
});


// Play og pause
play.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        play.innerHTML = "<img src=\"img/pause.svg\">";
    } else {
        video.pause();
        play.innerHTML = "<img src=\"img/play.svg\">";
    }
});

if (video.currentTime == video.duration) {
    play.innerHTML = "<img src=\"img/play.svg\">";
}


// Mute takkinn
mute.addEventListener('click', function() {
    if (video.muted == false) {
        video.muted = true;
        mute.innerHTML = "<img src=\"img/unmute.svg\">";
    } else {
        video.muted = false;
        mute.innerHTML = "<img src=\"img/mute.svg\">";
    }
});


// Back takkinn sem færir myndband aftur um 3 sekúndur
back.addEventListener('click', function() {
    if (video.currentTime > 3) {
        video.currentTime -= 3;
    } else {
        video.currentTime = 0;
    }
});

// Forward takkinn sem færir myndbandið fram um 3 sekúndur
forward.addEventListener('click', function() {
    if (video.currentTime < (video.duration - 3)) {
        video.currentTime += 3;
    } else {
        video.currentTime = video.duration;
    }
});

// Fullscreen
fullscreen.addEventListener('click', function() {
    var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
        (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
        (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
        (document.msFullscreenElement && document.msFullscreenElement !== null);

    if (!isInFullScreen) {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
});
