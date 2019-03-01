var el = document.querySelectorAll('.nav .nav__item'); // выбираем все ссылки в нашем меню
// и прогоняем через цикл

for(i=0;i<el.length; i++){
// если значение атрибута совпадает с урлом в браузере то
  if(el[i].href==window.location){
    el[i].className="active"; // добавляем нужный класс для выделения пункта
  }
}

$(window).on('load', function(){
  $('#container').masonry({
    // options...
    itemSelector: '.item',
  });
});


//map
function initMap(){
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: 49.441575, lng: 32.064699}
  });
  var geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

let toggle_btn  = document.getElementById("toggle");
let menu__hamburger = document.getElementById("toggle");
let html__hide = document.getElementById("html--hidden");



toggle_btn.addEventListener("click", function() {
  menu__hamburger.classList.toggle("menu__show");
  html__hide.classList.toggle("html--hidden")
});

window.addEventListener("orientationchange", function() {
  html__hide.classList.remove("html--hidden");
  menu__hamburger.classList.remove("menu__show");
}, false);








