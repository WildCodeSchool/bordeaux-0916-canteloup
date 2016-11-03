((app) => {
    'use strict'
    app.component("navbar", {
        bindings: {
            editMode: "<",
            ngModel: "=",
            user: '<'
        },
        templateUrl: 'js/components/common/navbar.html',
        controller: angular.extend(this, {
            page: {
                name: 'navbar',
                content: ''
            }
        })
    })
})(angular.module('app.common'))
