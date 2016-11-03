((app) => {
    'use strict'
    app.component("events", {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/events/events.html',
        controller: angular.extend(this, {
            page: {
                name: 'events',
                content: ''
            }
        })
    })
})(angular.module('app.events'))
