$(document).ready(function() {
	$("#dropdown").click(function() {
		$("#hide").slideToggle("slow");
	});

	$("#USDollar").focus(function() {
		$(this).css('background-color', '#fed766');

	});

	table1();
});

function initMap() {
    
        var fidi = {lat: 37.794536, lng: -122.400277};
        var locations = [{lat: 37.777830, lng: -122.406796},{lat: 37.777830, lng: -122.406796},{lat: 37.777830, lng: -122.406796}];

        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: fidi,
          scrollwheel: false,
          zoom: 15
        });

        // Create a marker and set its position.
        var marker = new google.maps.Marker({
          map: map,
          position: fidi,
          title: 'Hello World!'
        });


        for (i = 0; i < locations.length; i++) {  
          marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
          map: map
       });
          marker.setMap(map);
  }
}