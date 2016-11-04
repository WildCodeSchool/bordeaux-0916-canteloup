((app) => {
    'use strict'
    app.component("adminCoworkers", {
        templateUrl: 'js/components/admin/coworkers/coworkers.html',
        controller: function(UserService, $state) {
            angular.extend(this, {
                $onInit() {

                }
            })
        }
    })
})(angular.module('app.admin'))
