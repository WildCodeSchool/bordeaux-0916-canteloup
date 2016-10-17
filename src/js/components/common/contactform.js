((app) => {
    'use strict'
    app.component("contactform", {
        templateUrl: 'js/components/common/contactform.html',
        controller: [function() {
            angular.extend(this, {
                $onInit() {
                },
                saveUser() {
                  console.log('SEND !!', this.contactInfo);
                }
            })
        }]
    })
})(angular.module('app.common'))
