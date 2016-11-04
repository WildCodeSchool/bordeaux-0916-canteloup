((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.admin', {
            url:'/admin',
            abstract:true,
            template: '<admin />'
        })
    }])
})(angular.module('app.admin', ['ui.router']))
