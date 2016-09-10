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
        var myLatLng = {lat: 37.794536, lng: -122.400277};

        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          scrollwheel: false,
          zoom: 15
        });

        // Create a marker and set its position.
        var marker = new google.maps.Marker({
          map: map,
          position: myLatLng,
          title: 'Hello World!'
        });
}
