((app) => {
    'use strict'
    app.component("card", {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/common/card.html',
        controller: function() {
            angular.extend(this, {
                page: {
                    name: 'card',
                    content: ''
                }
            })
        }
    })
})(angular.module('app.common'))
