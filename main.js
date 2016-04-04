function initMap() {
    var mapDiv = document.getElementById("map");
    var map = new google.maps.Map(mapDiv, {
        center: {
            lat: 37.7630538,
            lng: -122.41099129999999
        },
        zoom: 18
    });

}