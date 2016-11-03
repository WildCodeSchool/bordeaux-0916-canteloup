((app) => {
    'use strict'
    app.component("events", {
        templateUrl: 'js/components/events/events.html',
        controller: function($location, $anchorScroll){
          this.gotofirstPart = function(){
            $location.hash('firstPart')
            $anchorScroll()
          }
        }
    })
})(angular.module('app.events'))
