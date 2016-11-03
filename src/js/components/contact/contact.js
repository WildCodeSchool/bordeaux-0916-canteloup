((app) => {
    'use strict'
    app.component("contact", {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/contact/contact.html',
        controller: angular.extend(this, {
            page: {
                name: 'contact',
                content: ''
            }
        })
    })
})(angular.module('app.contact'));
