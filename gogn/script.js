//var JSON_URL = '/videos.json';

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded');
  pullData();
});

function createSite(){
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

  var min = Math.floor(duration/60);
  var sek = duration - min*60;
  var ftime = document.createTextNode(min +":"+sek);

  var card__content = document.createElement("div");
  card__content.classList.add("card__content");

  var card__title = document.createElement("div");
  card__title.classList.add("card__title");
  var card__title__title = document.createElement("h3");
  card__title__title.appendChild(document.createTextNode(title));
  card__title.appendChild(card__title__title);

  var card__text = document.createElement("div");
  card__text.classList.add("card__text");
  card__text.appendChild(document.createTextNode("Fyrir " + created + " síðan."));

  time.appendChild(ftime);
  card__img.appendChild(image);
  card__img.appendChild(time);
  card__content.appendChild(card__title);
  card__content.appendChild(card__text);
  card.appendChild(card__img);
  card.appendChild(card__content);
  document.querySelector(".category").appendChild(card);
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
   request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         //console.log(request.responseText);
          var response = JSON.parse(request.responseText);
          //console.log(response.videos[1]);
          for (var i = 0; i < response.categories.length; i++) {
            console.log(response.categories[0].videos[1]);
            createCategory(response.categories[i].title);
            for (var j = 0; j < response.categories[i].videos.length; j++) {
              for (var k = 0; k < response.videos.length; k++) {
                if (response.categories[i].videos[j] === response.videos[k].id) {
                  var v = response.videos[k];
                  createVideoElement(v.id, v.title, v.created, v.duration,v.poster,v.video);
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
