((app) => {
    'use strict'
    app.component("tarifs", {
        templateUrl: 'js/components/tarifs/tarifs.html',
        controller: function($location, $anchorScroll) {
            this.gotofirstPart = function() {
                $location.hash('firstPart')
                $anchorScroll()
            }

            this.gototitle = function() {
                $location.hash('title_page')
                $anchorScroll()
            }

            angular.extend(this, {
                page: {
                    name: 'tarifs',
                    content: ''
                }
            })
        }
    })
})(angular.module('app.tarifs'))
