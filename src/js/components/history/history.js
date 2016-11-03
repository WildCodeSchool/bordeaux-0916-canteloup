((app) => {
    'use strict'
    app.component("history", {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/history/history.html',
        controller: angular.extend(this, {
            page: {
                name: 'history',
                content: ''
            }
        })
    })
})(angular.module('app.history'))
