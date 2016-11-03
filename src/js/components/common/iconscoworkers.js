((app) => {
    'use strict'
    app.component("iconscoworkers", {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/common/iconscoworkers.html',
        controller: angular.extend(this, {
            page: {
                name: 'iconscoworkers',
                content: ''
            }
        })
    })
})(angular.module('app.common'))
