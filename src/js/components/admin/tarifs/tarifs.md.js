((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.admin.tarifs', {
            url:'/tarifs',
            template: '<admin-tarifs />'
        })
    }])
})(angular.module('app.admin.tarifs', ['ui.router']))
