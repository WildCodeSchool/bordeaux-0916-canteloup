((app) => {
    'use strict'
    app.component("tarifs", {
        templateUrl: 'js/components/tarifs/tarifs.html',
        controller: function($location, $anchorScroll){
          this.gotofirstPart = function(){
            $location.hash('firstPart')
            $anchorScroll()
          }
        }
    })
})(angular.module('app.tarifs'))
