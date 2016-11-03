((app) => {
    'use strict'
    app.component("history", {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/history/history.html',
        controller: function($location, $anchorScroll) {
            angular.extend(this, {
                page: {
                    name: 'history',
                    content: ""
                }
            })
            this.gotofirstPart = function() {
                $location.hash('firstPart')
                $anchorScroll()
            }
        }
    })
})(angular.module('app.history'))
