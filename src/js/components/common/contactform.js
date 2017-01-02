((app) => {
    'use strict'
    app.component("contactform", {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/common/contactform.html',
        controller: [function() {
            angular.extend(this, {
                $onInit() {
                },
                sendEmail() {
                  console.log('SEND !!', this.contactInfo);
                }
            })
        }]
    })
})(angular.module('app.common'))
