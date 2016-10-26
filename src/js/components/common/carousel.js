((app) => {
    'use strict'
    app.component("carousel", {
        templateUrl: 'js/components/common/carousel.html',
        bindings: {
            user: '<'
        },
        controller: [function() {
            let currdeg = 0;
            let carousel = angular.element('.carousel');

            angular.extend(this, {
                rotate(direction) {
                    if (direction === "n") {
                        currdeg = currdeg - 60;
                    }
                    if (direction === "p") {
                        currdeg = currdeg + 60;
                    }
                    carousel.css({
                        "-webkit-transform": "rotateY(" + currdeg + "deg)",
                        "-moz-transform": "rotateY(" + currdeg + "deg)",
                        "-o-transform": "rotateY(" + currdeg + "deg)",
                        "transform": "rotateY(" + currdeg + "deg)"
                    });
                }
            })
        }]
    })
})(angular.module('app.common'))
