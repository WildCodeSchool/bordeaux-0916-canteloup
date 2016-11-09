((app) => {
    'use strict'
    app.component("history", {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/history/history.html',
        controller: function($location, $anchorScroll, PageService) {
            angular.extend(this, {
                page: {
                    name: 'history',
                    content: ""
                },
                gotofirstPart() {
                    $location.hash('firstPart')
                    $anchorScroll()
                },
                gototitle() {
                    $location.hash('title_page')
                    $anchorScroll()
                },
                upload(file, field) {
                    PageService.upload(this.page, file, field).then(() => {
                        toastr.success(`${file.name} uploaded`)
                    }).catch((err) => {
                        toastr.warning(`${file.name} upload error`)
                    })
                }
            })
        }
    })
})(angular.module('app.history'))
