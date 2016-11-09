((app) => {
    'use strict'
    app.component("homeevent", {
        bindings: {
            ngModel: "="
        },
        templateUrl: 'js/components/home/homeevent.html'
    })
})(angular.module('app.common'))
