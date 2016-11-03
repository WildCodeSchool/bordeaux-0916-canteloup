((app) => {
    'use strict'
    app.component("contact", {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/contact/contact.html',
        controller: function($location, $anchorScroll){
          angular.extend(this, {
              page: {
                  name: 'contact',
                  content: ''
              }
          })
          this.gotofirstPart = function(){
            $location.hash('firstPart')
            $anchorScroll()
          }
        }
    })
})(angular.module('app.contact'));
