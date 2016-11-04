((app) => {
    'use strict'
    app.component("carousel", {
        bindings: {
            editMode: "<",
            ngModel: "=",
            user: '<'
        },
        templateUrl: 'js/components/common/carousel.html',
        controller: ['$interval', function($interval) {
            let currdeg = 0;
            let carousel = angular.element('.carousel');

            angular.extend(this, {
                $onInit() {
                    this.interval = $interval(function() {
                        currdeg = currdeg - 60;
                        carousel.css({
                            "-webkit-transform": "rotateY(" + currdeg + "deg)",
                            "-moz-transform": "rotateY(" + currdeg + "deg)",
                            "-o-transform": "rotateY(" + currdeg + "deg)",
                            "transform": "rotateY(" + currdeg + "deg)"
                        });

                    }, 5000);
                },
                $onDestroy() {
                    $interval.cancel(this.interval);
                },
                rotate(direction) {
                    if (direction === "n") {
                        currdeg === currdeg - 60;
                    }
                    if (direction === "p") {
                        currdeg === currdeg + 60;
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
