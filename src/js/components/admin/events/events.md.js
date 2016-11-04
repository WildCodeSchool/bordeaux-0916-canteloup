((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.admin.events', {
            url:'/events',
            template: '<admin-events />'
        })
    }])
})(angular.module('app.admin.events', ['ui.router']))
