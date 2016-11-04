((app) => {
    'use strict'
    app.component("summary", {
        templateUrl: 'js/components/admin/summary/summary.html',
        controller: function(UserService, $state) {
            angular.extend(this, {
                $onInit() {

                },
                disconnect(){
                  UserService.disconnect().then((res) => {
                      $state.go('app.home')
                  }).catch(() => {
                      //Erreur
                  })
                }
            })
        }
    })
})(angular.module('app.admin.summary'))
