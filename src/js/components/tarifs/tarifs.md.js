((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.tarifs', {
            url:'/tarifs',
            template: '<tarifs />'
        })
    }])
})(angular.module('app.tarifs', ['ui.router']))
