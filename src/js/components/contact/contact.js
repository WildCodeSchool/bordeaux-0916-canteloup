((app) => {
    'use strict'
    app.component("contact", {
        templateUrl: 'js/components/contact/contact.html',
        controller: [function() {
            angular.extend(this, {
                isCollapsed: true,
                $onInit() {
                    let map = L.map('map').setView([44.8336476, -0.5660190999999486], 13);
                    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    }).addTo(map);

                    L.marker([44.8336476, -0.5660190999999486]).addTo(map)
                        .bindPopup('Wild Code School.<br> 15 Place Canteloup, 33800 Bordeaux, France')
                        .openPopup();
                }
            })
        }]
    })
})(angular.module('app.contact'));
