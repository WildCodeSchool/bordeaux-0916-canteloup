((app) => {
    'use strict'
    app.component("footer", {
        templateUrl: 'js/components/common/footer.html',
        controller: function() {
            angular.extend(this, {
                page: {
                    name: 'contact',
                    content: ''
                }
            })
        }
    })
})(angular.module('app.common'))
