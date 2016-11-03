((app) => {
    'use strict'
    app.component("about", {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/about/about.html',
        controller: function() {
            angular.extend(this, {
                page: {
                    name: 'about',
                    content: ''
                }
            })
        }
    })
})(angular.module('app.about'))
