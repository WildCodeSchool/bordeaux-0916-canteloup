((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.history', {
            url:'/history',
            template: '<history />'
        })
    }])
})(angular.module('app.history', ['ui.router']))
