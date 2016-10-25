((app) => {
    'use strict'
    app.component("modal", {
        templateUrl: 'js/components/tarifs/modal.html',
        // controller: function($scope, $http) {
        //   $http.get('infoRoom.json')
        //     .then(function(res) {
        //         $scope.data = res.data
        //     })
        //     .catch(function(err) {
        //         console.log(err)
        //     })
        // }
    })

})(angular.module('app.common'))
