((app) => {
    'use strict'
    app.component("coworkers", {
        templateUrl: 'js/components/coworkers/coworkers.html',
        controller: function($location, $anchorScroll){
          this.gotofirstPart = function(){
            $location.hash('firstPart')
            $anchorScroll()
          }
        }
    })
})(angular.module('app.coworkers'))
