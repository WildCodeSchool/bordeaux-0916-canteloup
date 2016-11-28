((app) => {
    'use strict'
    app.component("price", {
        bindings: {
            ngModel: "="
        },
        templateUrl: 'js/components/tarifs/price.html'
    })
})(angular.module('app.common'))
