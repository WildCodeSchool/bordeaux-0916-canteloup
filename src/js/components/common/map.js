((app) => {
    'use strict'
    app.component("map", {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/common/map.html',
        controller: [function() {
            angular.extend(this, {
                isCollapsed: true,
                $onInit() {
                    let map = L.map('map', {
                        center: [44.8336476, -0.5660190999999486],
                        zoom: 13,
                        scrollWheelZoom: false
                    });

                    L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    }).addTo(map);

                    let targetIcon = L.icon({
                        iconUrl: '/img/icons/target.png',
                        iconSize: [70, 50], // size of the icon
                        popupAnchor: [0, -20] // point from which the popup should open relative to the iconAnchor
                    });

                    L.marker([44.8336476, -0.5660190999999486], {
                            icon: targetIcon
                        }).addTo(map)
                        .bindPopup(' L&rsquo;atelier Canteloup <br> 15 Place Canteloup, 33800 Bordeaux, France')
                        .openPopup();

                    
                }
            })
        }]
    })
})(angular.module('app.common'))
