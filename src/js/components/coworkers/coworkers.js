((app) => {
    'use strict'
    app.component("coworkers", {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/coworkers/coworkers.html',
        controller: function($location, $anchorScroll) {
            angular.extend(this, {
                page: {
                    name: 'coworkers',
                    content: ''
                }
            })
            this.gotofirstPart = function() {
                $location.hash('firstPart')
                $anchorScroll()
            }
        }
    })
})(angular.module('app.coworkers'))
