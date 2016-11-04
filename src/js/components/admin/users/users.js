((app) => {
    'use strict'
    app.component("users", {
        templateUrl: 'js/components/admin/users/users.html',
        controller: function(UserService, $state) {
            angular.extend(this, {
                $onInit() {
                    UserService.getAll().then((res) => {
                        this.users = res.data
                    })
                },
                edit(user) {
                    this.selectedUser = user
                    this.scrollTo('formUser')
                },
                add() {
                    this.selectedUser = {}
                    this.users.push(this.selectedUser)
                    this.scrollTo('formUser')
                },
                save() {
                    if (angular.isUndefined(this.selectedUser.password))
                        delete this.selectedUser.password

                    UserService.save(this.selectedUser).then((res) => {
                        if (angular.isUndefined(this.selectedUser._id))
                            this.users[this.users.length - 1] = res.data

                        this.selectedUser = this.users[this.users.length - 1]

                        toastr.success(`${this.selectedUser.firstname} ${this.selectedUser.lastname} saved`)
                    }).catch((err) => {
                        toastr.error(`${err.data}`)
                    })

                },
                delete(idx, user) {
                    this.users.splice(idx, 1)
                    if (angular.isDefined(user._id)) {
                        UserService.delete(user).then(() => {
                            toastr.success(`${user.firstname} ${user.lastname} deleted`)
                            this.selectedUser = null
                        }).catch((err) => {
                            toastr.error(`${err.data}`)
                        })
                    } else {
                        this.selectedUser = null
                    }

                }
            })
        }
    })
})(angular.module('app.admin.users'))
