((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.admin.coworkers', {
            url:'/admin-coworkers',
            template: '<admin-coworkers />'
        })
    }])
})(angular.module('app.admin', ['ui.router']))
