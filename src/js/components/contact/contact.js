((app) => {
    'use strict'
    app.component("contact", {
        templateUrl: 'js/components/contact/contact.html',
        controller: [function() {
            angular.extend(this, {
                isCollapsed: true
            })

            function success(position) {
                var mapcanvas = document.createElement('div');
                mapcanvas.id = 'mapcontainer';
                mapcanvas.style.height = '400px';
                mapcanvas.style.width = '80%';
                mapcanvas.style.margin = 'auto';

                document.querySelector('article').appendChild(mapcanvas);

                var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                var options = {
                    zoom: 15,
                    center: coords,
                    mapTypeControl: false,
                    navigationControlOptions: {
                        style: google.maps.NavigationControlStyle.SMALL
                    },
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                var map = new google.maps.Map(document.getElementById("mapcontainer"), options);

                var marker = new google.maps.Marker({
                    position: coords,
                    map: map,
                    title: "You are here!"
                });
            }

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(success);
            } else {
                error('Geo Location is not supported');
            }
            var map = L.map('map').setView([44.8336476, -0.5660190999999486], 13);
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([44.8336476, -0.5660190999999486]).addTo(map)
            .bindPopup('Wild Code School.<br> 15 Place Canteloup, 33800 Bordeaux, France')
            .openPopup();




        }]
    })
})(angular.module('app.contact'));
