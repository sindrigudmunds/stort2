'use strict';

//var JSON_URL = '/videos.json';

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded');
  createCategory("Myndbandaleigan");
  pullData();
});

function createSite() {
  var data = pullData();
  console.log(data);
}

function createVideoElement(id, title, created, duration, poster, video) {
  var card = document.createElement("div");
  card.classList.add("card");

  var card__img = document.createElement("div");
  card__img.classList.add("card__img");

  var image = document.createElement("img");
  image.setAttribute("src", poster);

  var time = document.createElement("div");
  time.classList.add("card__time");

  var min = Math.floor(duration / 60);
  var sek = duration - min * 60;
  if (min < 10) {
    min = "0" + min;
  }
  if (sek < 10) {
    sek = "0" + sek;
  }
  var ftime = document.createTextNode(min + ":" + sek);

  var card__content = document.createElement("div");
  card__content.classList.add("card__content");

  var card__title = document.createElement("div");
  card__title.classList.add("card__title");
  var card__title__title = document.createElement("h3");
  card__title__title.appendChild(document.createTextNode(title));
  card__title.appendChild(card__title__title);

  var card__text = document.createElement("div");
  card__text.classList.add("card__text");
  card__text.appendChild(document.createTextNode("Fyrir " + parseMS(created) + " síðan."));

  function parseMS(created) {
    var now = new Date().getTime();
    var since = now - created;

    console.log(since);

    var totalSecs = since / 1000;
    var years = Math.floor(totalSecs / (60 * 60 * 24 * 365.25));
    var months = Math.floor(totalSecs / (60 * 60 * 24 * 30));
    var weeks = Math.floor(totalSecs / (60 * 60 * 24 * 7));
    var days = Math.floor(totalSecs / (60 * 60 * 24));
    var hours = Math.floor(totalSecs / (60 * 60));

    if (hours < 24) {
      if (hours === 1 || hours === 21) {
        return hours + " klukkustund";
      }
      return hours + " klukkustundum";
    } else if (days < 7) {
      if (days === 1) {
        return days + " degi";
      }
      return days + " dögum";
    } else if (weeks < 4) {
      if (weeks === 1) {
        return weeks + " degi";
      }
      return weeks + " vikum";
    } else if (months < 12) {
      if (months === 1) {
        return months + " mánuði";
      }
      return months + " mánuðum";
    } else {
      if (years === 1 || years === 21) {
        return years + " ári";
      }
      return years + " árum";
    }
  }

  time.appendChild(ftime);
  card__img.appendChild(image);
  card__img.appendChild(time);
  card__content.appendChild(card__title);
  card__content.appendChild(card__text);
  card.appendChild(card__img);
  card.appendChild(card__content);
  document.body.lastChild.appendChild(card);
  //<img src="videos/bunny.png">
}

function createPartition() {
  var partition = document.createElement("div");
  partition.classList.add("partition");
  document.body.appendChild(partition);
}

function createCategory(title) {

  //console.log("Kominn í createCategory");
  var category = document.createElement("div");
  var categoryHeading = document.createElement("h2");
  categoryHeading.appendChild(document.createTextNode(title));
  categoryHeading.classList.add("category__heading");
  category.appendChild(categoryHeading);
  category.classList.add("category");
  document.body.appendChild(category);
  /*
  * Smíðar container (div class="category")
  * smíðar titil og appendar sem firstChild (h2 class ="category__heading")
  * kallar á createVideoElement fyrir hvert stak í videos[]
  * appendar hvert element í röð og loks býr til tómt partition element ()
  * og appendar aftast (div class="partition")
  */
}
function pullData() {
  var request = new XMLHttpRequest();
  request.open("GET", "videos.json", true);
  request.send();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //console.log(request.responseText);
      var response = JSON.parse(request.responseText);
      //console.log(response.videos[1]);
      for (var i = 0; i < response.categories.length; i++) {
        //console.log(response.categories[0].videos[1]);
        createCategory(response.categories[i].title);
        //console.log("i= " + i);
        for (var j = 0; j < response.categories[i].videos.length; j++) {
          //console.log("i= " + i + " j= " + j);
          for (var k = 0; k < response.videos.length; k++) {
            //console.log("i= " + i + " j= " + j + " k= " + k + " videos[k].id = " + response.videos[k].id + " cat[i]vid[j] = " + response.categories[i].videos[j]);
            if (response.categories[i].videos[j] === response.videos[k].id) {
              //console.log(response.categories[i].videos[j] === response.videos[k].id);
              var v = response.videos[k];
              createVideoElement(v.id, v.title, v.created, v.duration, v.poster, v.video);
            }
          }
        }
        createPartition();
      }

      //createCategory(response.categories[0].title);
      //document.getElementById("1").innerHTML = "<h1>Partí</h1>";
    }
  };
  //onsole.log(response);
  //return response;
}

//# sourceMappingURL=script-compiled.js.map