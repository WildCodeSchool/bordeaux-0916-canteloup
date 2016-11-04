((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.admin.coworkers', {
            url:'/coworkers',
            template: '<admin-coworkers />'
        })
    }])
})(angular.module('app.admin.coworkers', ['ui.router']))
