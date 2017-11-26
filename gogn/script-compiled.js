'use strict';

//var JSON_URL = '/videos.json';

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded');
  pullData();
});

function createSite() {
  var data = pullData();
  console.log(data);
}

function createVideoElement(id, title, created, duration, poster, video) {
  console.log(id);
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
        createCategory(response.categories[i].title);
        for (var j = 0; j < response.categories[i].videos.length; j++) {
          for (var k = 0; k < response.videos.length; k++) {
            if (response.categories[i].videos[j] === response.videos[k].id) {
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