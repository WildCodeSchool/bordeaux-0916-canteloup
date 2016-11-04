((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.admin.summary', {
            url:'/summary',
            template: '<summary />'
        })
    }])
})(angular.module('app.admin.summary', ['ui.router']))
