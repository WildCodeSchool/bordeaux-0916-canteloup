((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.admin.login', {
            url:'/',
            template: '<login />'
        })
    }])
})(angular.module('app.admin.login', ['ui.router']))
