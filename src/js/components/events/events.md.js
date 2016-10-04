((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.events', {
            url:'/events',
            template: '<events />'
        })
    }])
})(angular.module('app.events', ['ui.router']))
