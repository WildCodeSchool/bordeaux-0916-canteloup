((app) => {
    'use strict'
    app.service('coworkersService', ['$http', class coworkers {

        constructor($http) {
            this.$http = $http
        }

        getAll() {
            return this.$http.get('/coworkers.json')
                }


        save() {
            page.content = JSON.stringify(page.content)
            if (page._id)
                return this.$http.put('/coworkers.json' + page._id, page)
            else
                return this.$http.post('/coworkers.json', page)
        }

        delete(page) {
            return this.$http.delete('src/static/coworkers.json' + page._id)
        }

    }])
})(angular.module('app.coworkers'))
