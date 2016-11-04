((app) => {
    'use strict'
    app.component("login", {
        templateUrl: 'js/components/admin/login/login.html',
        controller: function(UserService, $state) {
            angular.extend(this, {
                $onInit() {
                    UserService.getCurrent().then((user) => {
                        if (user){
                          $state.go('app.admin.summary')
                        }
                    }).catch((err) => {
                        //ERROR
                    })
                },
                connect() {
                    UserService.connect(this.user).then((res) => {
                        $state.reload()
                        toastr.success("Vous êtes connecté", "Connection")
                    }).catch(() => {
                        toastr.error('Vos identifiants sont incorrects', 'Erreur');
                    })
                }
            })
        }
    })
})(angular.module('app.admin.login'))
