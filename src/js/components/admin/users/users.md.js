((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.admin.users', {
            url:'/users',
            template: '<users />'
        })
    }])
})(angular.module('app.admin.users', ['ui.router']))
