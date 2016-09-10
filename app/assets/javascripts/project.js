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
        var mission = {lat: 37.759374, lng: -122.415612};
        var castro = {lat: 37.760867, lng: -122.435611};
        var haight = {lat: 37.769959, lng: -122.443639};
        var marina = {lat: 37.803671, lng: -122.438100};
        var soma = {lat: 37.783473, lng: -122.390015};
        var hayes = {lat: 37.775608, lng: -122.426050};
        var nb = {lat: 37.806136, lng: -122.411758};
        var pac = {lat: 37.792606, lng: -122.437035};
        var presidio = {lat: 37.788808, lng: -122.454029}
        var locations = [{lat: 37.777830, lng: -122.406796},{lat: 37.777830, lng: -122.406796},{lat: 37.777830, lng: -122.406796}];

        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementByClassName('mission'), {
          center: mission,
          scrollwheel: false,
          zoom: 15
        });


         var map = new google.maps.Map(document.getElementById('castro'), {
          center: castro,
          scrollwheel: false,
          zoom: 15
        });

          var map = new google.maps.Map(document.getElementById('haight-ashbury'), {
          center: haight,
          scrollwheel: false,
          zoom: 15
        });

           var map = new google.maps.Map(document.getElementById('marina'), {
          center: marina,
          scrollwheel: false,
          zoom: 15
        });



            var map = new google.maps.Map(document.getElementById('soma'), {
          center: soma,
          scrollwheel: false,
          zoom: 15
        });


            var map = new google.maps.Map(document.getElementById('hayes-valley'), {
          center: hayes,
          scrollwheel: false,
          zoom: 15
        });


        var map = new google.maps.Map(document.getElementById('north-beacah'), {
          center: nb,
          scrollwheel: false,
          zoom: 15
        });


        var map = new google.maps.Map(document.getElementById('pacific-heights'), {
          center: pac,
          scrollwheel: false,
          zoom: 15
        });


        var map = new google.maps.Map(document.getElementById('presidio'), {
          center: presidio,
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