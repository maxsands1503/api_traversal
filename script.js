var request = new XMLHttpRequest();
var button = document.getElementById('buttoni');
var output = document.getElementById('center_column');
button.addEventListener("click", function(){
  request.onreadystatechange = function() {
     if (request.readyState == 4 && request.status == 200) {
       var responded = JSON.parse(request.responseText);
       for(var i = 0; i < responded.Search.length; i++){
         if(responded.Search[i].Poster === "N/A"){

           output.innerHTML += "<h3 style='text-align: center'>" + responded.Search[i].Title +  " : " + responded.Search[i].Year + "</h3><br><div class ='images'> <img src='./mockups/images/no_image.png' class='movie_poster'></div>"

         }else {
           output.innerHTML += "<h3 style='text-align: center'>" + responded.Search[i].Title +  " : " + responded.Search[i].Year + "</h3><br><div class='images'><img src=" + responded.Search[i].Poster + "class='movie_poster' style='height: 221px; width 150px;'></div>"

         }
         console.log(responded.Search[i]);
       }
     }
 }

request.open("GET", "http://www.omdbapi.com/?s="+ document.getElementById('userInput').value);
request.send();
})
