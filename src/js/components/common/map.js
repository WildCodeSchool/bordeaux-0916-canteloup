((app) => {
    'use strict'
    app.component("map", {
        templateUrl: 'js/components/common/map.html',
        controller: [function() {
            angular.extend(this, {
                isCollapsed: true,
                $onInit() {
                    let map = L.map('map').setView([44.8336476, -0.5660190999999486], 13);
                    L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    }).addTo(map);

                    L.marker([44.8336476, -0.5660190999999486]).addTo(map)
                        .bindPopup(' L&rsquo;atielier Canteloup <br> 15 Place Canteloup, 33800 Bordeaux, France')
                        .openPopup();

                }
            })
        }]
    })
})(angular.module('app.common'))
