((app) => {
    'use strict'
    app.component("events", {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/events/events.html',
        controller: function($location, $anchorScroll, EventsService) {
          angular.extend(this, {
                page: {
                    name: 'events',
                    content: ''
                },
                $onInit() {
                    EventsService.getPublished().then((res) => {
                        this.events = res.data
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
})(angular.module('app.events'))
