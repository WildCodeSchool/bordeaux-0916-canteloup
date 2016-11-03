((app) => {
    'use strict'
    app.component("contact", {
        templateUrl: 'js/components/contact/contact.html',
        controller: function($location, $anchorScroll){
          this.gotofirstPart = function(){
            $location.hash('firstPart')
            $anchorScroll()
          }
        }
    })
})(angular.module('app.contact'));
