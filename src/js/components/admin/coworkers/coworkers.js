((app) => {
    'use strict'
    app.component("adminCoworkers", {
        templateUrl: 'js/components/admin/coworkers/coworkers.html',
        controller: function(CoworkersService, $state, $timeout, $location, $anchorScroll) {
            angular.extend(this, {
              $onInit() {
                  CoworkersService.getAll().then((res) => {
                      this.coworkers = res.data
                  })
              },
              back(){
                $state.go('app.admin.summary')
              },
              scrollTo(id){
                  $timeout(function() {
                      $location.hash()
                      $anchorScroll(id)
                  }, 100)
                },
              edit(coworker) {
                  this.selectedCoworker = coworker
                  this.scrollTo('formCoworker')
              },
              add() {
                  this.selectedCoworker = {}
                  this.coworkers.push(this.selectedCoworker)
                  this.scrollTo('formCoworker')
              },
              save() {
                  CoworkersService.save(this.selectedCoworker).then((res) => {
                      if (angular.isUndefined(this.selectedCoworker._id))
                          this.coworkers.push(res.data)

                      this.selectedCoworker = res.data
                      if (this.uploadImage){
                          CoworkersService.upload(this.selectedCoworker, this.uploadImage).then((res) => {
                            this.uploadImage = null
                            toastr.success(`${this.selectedCoworker.company} saved`)
                          }).catch((err) => {
                            toastr.warning(`${this.selectedCoworker.company} upload image error`)
                          })
                      }else {
                        toastr.success(`${this.selectedCoworker.company} saved`)
                      }
                  }).catch((err) => {
                      toastr.error(`${err.data}`)
                  })

              },
              delete(idx, coworker) {
                  this.coworkers.splice(idx, 1)
                  if (angular.isDefined(coworker._id)) {
                      CoworkersService.delete(coworker).then(() => {
                          toastr.warning(`${coworker.company} deleted`)
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
