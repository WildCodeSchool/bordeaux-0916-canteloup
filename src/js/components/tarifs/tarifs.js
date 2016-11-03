((app) => {
    'use strict'
    app.component("tarifs", {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/tarifs/tarifs.html',
        controller: angular.extend(this, {
            page: {
                name: 'tarifs',
                content: ''
            }
        })
    })
})(angular.module('app.tarifs'))
