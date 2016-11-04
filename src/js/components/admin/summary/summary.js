((app) => {
    'use strict'
    app.component("summary", {
        templateUrl: 'js/components/admin/summary/summary.html',
        controller: function(UserService, $state) {
            angular.extend(this, {
                $onInit() {

                }
            })
        }
    })
})(angular.module('app.admin.summary'))
