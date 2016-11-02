((app) => {
    'use strict'
    app.component("coworkers", {
        templateUrl: 'js/components/coworkers/coworkers.html'
        // ,
        // $http.get('coworkers.json').then(function(res) {
        //     this.coworker = res.data
        // }).catch(function(err) {
        //     console.log(err)
        // })


    })
})(angular.module('app.coworkers'))
