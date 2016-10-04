((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.coworkers', {
            url:'/coworkers',
            template: '<coworkers />'
        })
    }])
})(angular.module('app.coworkers', ['ui.router']))
