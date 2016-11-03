((app) => {
    'use strict'
    app.component("price", {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/tarifs/price.html'
    })
})(angular.module('app.common'))
