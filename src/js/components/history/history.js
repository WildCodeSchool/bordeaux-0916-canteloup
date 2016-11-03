((app) => {
    'use strict'
    app.component("history", {
        templateUrl: 'js/components/history/history.html',
        controller: function($location, $anchorScroll){
          this.gotofirstPart = function(){
            $location.hash('firstPart')
            $anchorScroll()
          }
        }
    })
})(angular.module('app.history'))
