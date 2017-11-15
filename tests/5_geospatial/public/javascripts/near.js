// Google Maps map aanmaken met centrum op Antwerpen
var map = new google.maps.Map(document.getElementById('map'), {
center: {lat: 51.21, lng: 4.42},
zoom: 12
});

// Autocomplete API inladen en op de search input plaatsen
geocoder = new google.maps.Geocoder();
var input = document.getElementById("address");
var autocomplete = new google.maps.places.Autocomplete(input);

// Autocomplete bounds instellen op Antwerpen
var circle = new google.maps.Circle({
center: new google.maps.LatLng(51.21, 4.42),
radius: 10000
});
autocomplete.setBounds(circle.getBounds());

// Markers & infowindows aanmaken 
var infowindow = new google.maps.InfoWindow();
var marker;
var markersArray = [];
var papiermanden = [];
function createMarkers() {
for (var i = 0; i < papiermanden.length; i++) {
    marker = new google.maps.Marker({
    position: new google.maps.LatLng(papiermanden[i].location[1], papiermanden[i].location[0]),
    map: map
    });

    markersArray.push(marker);
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
        infowindow.setContent(
        "<p>" + papiermanden[i].straatnaam + " " + papiermanden[i].huisnummer + "</p><p>" + papiermanden[i].opmerking + "</p>"
        );
        infowindow.open(map, marker);
    }
    })(marker, i));
}
}

// zoek button actie
function search() {
for (var i = 0; i < papiermanden.length; i++ ) {
    markersArray[i].setMap(null);
}
markersArray.length = 0;

var place = autocomplete.getPlace();
var straal = $('#straal').val();
if (place && straal) {
    $.get("/near?lng=" + place.geometry.location.lng() + "&lat=" + place.geometry.location.lat() + "&rad=" + straal, function(data, status){
    papiermanden = data;
    createMarkers();
    });
}
}