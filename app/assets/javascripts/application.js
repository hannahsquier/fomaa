// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

// $(document).ready(function() {
//   $("#dropdown").click(function() {
//     $("#hide").slideToggle("slow");
//   });

//   $("#USDollar").focus(function() {
//     $(this).css('background-color', '#fed766');

//   });

//   table1();
// });
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
        if (!!document.getElementById('mission')) {
        var map = new google.maps.Map(document.getElementById('mission'), {
          center: mission,
          scrollwheel: false,
          zoom: 15
        });
        } else if (!!document.getElementById('castro')) {


         var map = new google.maps.Map(document.getElementById('castro'), {
          center: castro,
          scrollwheel: false,
          zoom: 15
        });
        } else if (!!document.getElementById('haight-ashbury')) {

          var map = new google.maps.Map(document.getElementById('haight-ashbury'), {
          center: haight,
          scrollwheel: false,
          zoom: 15
        });
      } else if (!!document.getElementById('marina')) {

           var map = new google.maps.Map(document.getElementById('marina'), {
          center: marina,
          scrollwheel: false,
          zoom: 15
        });
       } else if (!!document.getElementById('soma')) {



        var map = new google.maps.Map(document.getElementById('soma'), {
          center: soma,
          scrollwheel: false,
          zoom: 15
        });
        } else if (!!document.getElementById('hayes-valley')) {


        var map = new google.maps.Map(document.getElementById('hayes-valley'), {
          center: hayes,
          scrollwheel: false,
          zoom: 15
        });
        } else if (document.getElementById('north-beacah')) {


        var map = new google.maps.Map(document.getElementById('north-beacah'), {
          center: nb,
          scrollwheel: false,
          zoom: 15
        });
        } else if (!!document.getElementById('pacific-heights')) {


        var map = new google.maps.Map(document.getElementById('pacific-heights'), {
          center: pac,
          scrollwheel: false,
          zoom: 15
        });
        } else if (!!document.getElementById('presidio')) {


        var map = new google.maps.Map(document.getElementById('presidio'), {
          center: presidio,
          scrollwheel: false,
          zoom: 15
        });
        }

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


// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

})(jQuery); // End of use strict
