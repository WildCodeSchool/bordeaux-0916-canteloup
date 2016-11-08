((app) => {
    'use strict'
    // toastr
    toastr.options = {
        positionClass: "toast-bottom-right"
    }

    const checkPassword = () => {
        return {
            require: 'ngModel',
            link(scope, elem, attrs, ctrl) {
                let firstPassword = '#' + attrs.checkPassword
                elem.add(firstPassword).on('keyup', () => {
                    scope.$apply(() => {
                        let v = elem.val() === $(firstPassword).val()
                        ctrl.$setValidity('passwordMatch', v)
                    })
                })
            }
        }
    }

    const gravatar = ['md5', (md5) => {
        return {
            replace: true,
            required: 'email',
            template: '<img ng-src="https://www.gravatar.com/avatar/{{hash}}?s={{size}}&d=identicon" />',
            link(scope, element, attrs) {
                attrs.$observe('email', (value) => {
                    if (!value) return

                    scope.hash = md5.createHash(value.toLowerCase())
                    scope.size = attrs.size

                    if (angular.isUndefined(scope.size))
                        scope.size = 60
                })
            }
        }
    }]

    const file = [() => {
        return {
            restrict: 'E',
            template: '<input type="file" />',
            replace: true,
            require: 'ngModel',
            link: function(scope, element, attr, ctrl) {
                var listener = function() {
                    scope.$apply(function() {
                        attr.multiple ? ctrl.$setViewValue(element[0].files) : ctrl.$setViewValue(element[0].files[0])
                    });
                }
                element.bind('change', listener)
            }
        }
    }]

    const formatDate = [() => {
        return {
            require: 'ngModel',
            link: function(scope, elem, attr, modelCtrl) {
                modelCtrl.$formatters.push(function(modelValue) {
                    if (modelValue) {
                        return new Date(modelValue);
                    } else {
                        return null;
                    }
                });
            }
        };
    }]

    app.directive('checkPassword', checkPassword)
    app.directive('gravatar', gravatar)
    app.directive('file', file)
    app.directive('formatDate', formatDate)
    app.run()

})(angular.module('app', [
    'ui.router',
    'ngCookies',
    'ngSanitize',
    'angular-md5',
    'InlineTextEditor',
    'textAngular',
    'pascalprecht.translate',
    'ngParallax',
    'app.views',
    'app.config',
    'app.services',
    'app.common',
    'app.home',
    'app.history',
    'app.tarifs',
    'app.coworkers',
    'app.contact',
    'app.events',
    'app.admin',
    'app.admin.login',
    'app.admin.summary',
    'app.admin.coworkers',
    'app.admin.users',
    'app.admin.events'
]))
