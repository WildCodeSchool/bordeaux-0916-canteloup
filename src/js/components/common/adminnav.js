((app) => {
    'use strict'
    app.component("adminnav", {
        templateUrl: 'js/components/common/adminnav.html',
        bindings: {
            user: '<'
        },
        controller: [function() {
            angular.extend(this, {

            })
        }]
    })
})(angular.module('app.common'))
