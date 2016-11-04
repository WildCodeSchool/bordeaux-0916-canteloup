((app) => {
    'use strict'
    app.component("coworkers", {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/coworkers/coworkers.html',

        controller: function($location, $anchorScroll, coworkersService) {
            angular.extend(this, {
                page: {
                    name: 'coworkers',
                    content: ''
                },
                $onInit() {
                    coworkersService.getAll().then((res) => {
                        this.coworkers = res.data

                    })
                },
                gotofirstPart() {
                    $location.hash('firstPart')
                    $anchorScroll()

                },
                gototitle() {
                    $location.hash('title_page')
                    $anchorScroll()
                }
            })
        }
    })
})(angular.module('app.coworkers'))
