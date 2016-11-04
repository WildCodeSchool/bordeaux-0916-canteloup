((app) => {
    'use strict'
    app.component("adminEvents", {
        templateUrl: 'js/components/admin/events/events.html',
        controller: function($state) {
            angular.extend(this, {

            })
        }
    })
})(angular.module('app.admin.events'))
