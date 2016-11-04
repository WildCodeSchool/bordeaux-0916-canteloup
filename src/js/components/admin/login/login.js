((app) => {
    'use strict'
    app.component("login", {
        templateUrl: 'js/components/admin/login/login.html',
        controller: function(UserService, $state) {
            angular.extend(this, {
                $onInit() {

                }
            })
        }
    })
})(angular.module('app.admin.login'))
