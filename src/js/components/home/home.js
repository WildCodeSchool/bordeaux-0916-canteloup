((app) => {
    'use strict'
    app.component("home", {
        templateUrl: 'js/components/home/home.html',
        controller: function($location, $anchorScroll){
          this.gotofirstPart = function(){
            $location.hash('firstPart')
            $anchorScroll()
          }
        }
    })
})(angular.module('app.home'))
