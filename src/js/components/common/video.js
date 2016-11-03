((app) => {
    'use strict'
    app.component("videos", {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/common/video.html',
        controller: function() {
            angular.extend(this, {
                page: {
                    name: 'videos',
                    content: ''
                }
            })
        }
    })
})(angular.module('app.common'))
