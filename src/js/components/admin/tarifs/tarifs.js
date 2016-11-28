((app) => {
    'use strict'
    app.component("adminTarifs", {
        templateUrl: 'js/components/admin/tarifs/tarifs.html',
        controller: function(TarifsService, $state, $timeout, $location, $anchorScroll) {
            angular.extend(this, {
                $onInit() {
                    TarifsService.getAll().then((res) => {
                        this.tarifs = res.data
                    })
                },
                back() {
                    $state.go('app.admin.summary')
                },
                scrollTo(id) {
                    $timeout(function() {
                        $location.hash()
                        $anchorScroll(id)
                    }, 100)
                },
                edit(event) {
                    this.selectedTarif = event
                    this.scrollTo('formTarif')
                },
                add() {
                    this.selectedTarif = {}
                    this.tarifs.push(this.selectedTarif)
                    this.scrollTo('formTarif')
                },
                save() {
                    TarifsService.save(this.selectedTarif).then((res) => {
                        if (angular.isUndefined(this.selectedTarif._id))
                            this.tarifs.push(res.data)

                        this.selectedTarif = res.data
                        if (this.uploadImage) {
                            TarifsService.upload(this.selectedTarif, this.uploadImage).then((res) => {
                                this.uploadImage = null
                                toastr.success(`${this.selectedTarif.title} saved`)
                            }).catch((err) => {
                                toastr.warning(`${this.selectedTarif.title} upload image error`)
                            })
                        } else {
                            toastr.success(`${this.selectedTarif.title} saved`)
                        }
                    }).catch((err) => {
                        toastr.error(`${err.data}`)
                    })

                },
                delete(idx, event) {
                    this.tarifs.splice(idx, 1)
                    if (angular.isDefined(event._id)) {
                        TarifsService.delete(event).then(() => {
                            toastr.warning(`${event.title} deleted`)
                            this.selectedTarif = null
                        }).catch((err) => {
                            toastr.error(`${err.data}`)
                        })
                    } else {
                        this.selectedTarif = null
                    }

                }
            })
        }
    })
})(angular.module('app.admin.tarifs'))
