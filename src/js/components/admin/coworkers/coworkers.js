((app) => {
    'use strict'
    app.component("adminCoworkers", {
        templateUrl: 'js/components/admin/coworkers/coworkers.html',
        controller: function(CoworkersService, $state) {
            angular.extend(this, {
              $onInit() {
                  CoworkersService.getAll().then((res) => {
                      this.coworkers = res.data
                  })
              },
              edit(user) {
                  this.selectedUser = user
                  this.scrollTo('formUser')
              },
              add() {
                  this.selectedUser = {}
                  this.coworkers.push(this.selectedCoworker)
                  this.scrollTo('formUser')
              },
              save() {
                  CoworkersService.save(this.selectedUser).then((res) => {
                      if (angular.isUndefined(this.selectedUser._id))
                          this.coworkers[this.coworkers.length - 1] = res.data

                      this.selectedUser = this.coworkers[this.coworkers.length - 1]

                      toastr.success(`${this.selectedCoworker.compagny} saved`)
                  }).catch((err) => {
                      toastr.error(`${err.data}`)
                  })

              },
              delete(idx, coworker) {
                  this.coworkers.splice(idx + this.startIndex, 1)
                  if (angular.isDefined(coworker._id)) {
                      CoworkersService.delete(coworker).then(() => {
                          toastr.success(`${this.coworker.compagny} saved`)
                          this.selectedCoworker = null
                      }).catch((err) => {
                          toastr.error(`${err.data}`)
                      })
                  } else {
                      this.selectedCoworker = null
                  }

              }
            })
        }
    })
})(angular.module('app.admin.coworkers'))
