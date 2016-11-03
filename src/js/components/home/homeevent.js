((app) => {
    'use strict'
    app.component("homeevent", {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/home/homeevent.html',
        controller: function() {
            angular.extend(this, {
                page: {
                    name: 'homeevent',
                    content: ''
                }
            })
        }
    })
})(angular.module('app.common'))
