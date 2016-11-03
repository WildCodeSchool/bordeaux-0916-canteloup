((app) => {
    'use strict'
    app.component("home", {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/home/home.html',
        controller: function($location, $anchorScroll) {
            angular.extend(this, {
                page: {
                    name: 'home',
                    content: ''
                }
            })

            this.gotofirstPart = function() {
                $location.hash('firstPart')
                $anchorScroll()
            }
        }
    })
})(angular.module('app.home'))
