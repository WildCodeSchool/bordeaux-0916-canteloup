((app) => {
    'use strict'
    app.component("events", {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/events/events.html',
        controller: function($location, $anchorScroll) {
            angular.extend(this, {
                page: {
                    name: 'events',
                    content: ''
                }
            })

            this.gotofirstPart = function() {
                $location.hash('firstPart')
                $anchorScroll()
            }

            this.gototitle = function() {
                $location.hash('title_page')
                $anchorScroll()
            }
        }
    })
})(angular.module('app.events'))
