((app) => {
    'use strict'
    app.component("coworkers", {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/coworkers/coworkers.html',
        controller: angular.extend(this, {
            page: {
                name: 'coworkers',
                content: ''
            }
        })
    })
})(angular.module('app.coworkers'))
