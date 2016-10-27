((app) => {
    'use strict'
    app.component("home", {
        templateUrl: 'js/components/home/home.html',
        controller: function($location, $anchorScroll){
          this.gotoBottom = function(){
            $location.hash('bottom')
            $anchorScroll()
          }
        }
    })
})(angular.module('app.home'))
