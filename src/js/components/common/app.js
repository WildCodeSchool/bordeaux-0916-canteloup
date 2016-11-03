((app) => {
    'use strict'
    app.component('app', {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/common/app.html',
        controller: [function(){
          angular.extend(this, {

          })
        }]
    })
})(angular.module('app.common'))
