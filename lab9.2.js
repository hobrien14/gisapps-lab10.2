document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('map').setView([40.38, -105.5], 10);

    L.tileLayer('https://api.mapbox.com/styles/v1/brightrain/ciycbsoa8007c2rqf7ym69old/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYnJpZ2h0cmFpbiIsImEiOiJyMjgtNGk4In0.Y64dPMiS4Xi8BXRiDhWXyg', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18
    }).addTo(map);

    function showLatLng(e) {
        document.getElementById("whereIsThis").innerText = e.latlng.lat + " | " + e.latlng.lng;
    }
    map.on('mousemove', showLatLng);

    document.getElementById("goToFRCCBoulder").onclick = function () {
        map.setView([40.1386, -105.12793], 16);
    };

    document.getElementById("goToRMNP").onclick = function () {
        map.setView([40.4, -105.8], 12);
    };

    function onMapClick(e) {
        var popup = L.popup()
            .setLatLng(e.latlng)
            .setContent("<h4>" + e.latlng.lat + " | " + e.latlng.lng + "</h4><center><img src='http://dev.brightrain.com/recreationer/images/icon-map-marker.png'></center>").openOn(map);

    }

    map.on('click', onMapClick);
});
