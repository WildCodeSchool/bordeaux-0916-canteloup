((app) => {
    'use strict'
    app.service('eventsService', ['$http', class events {

        constructor($http) {
            this.$http = $http
        }

        getAll() {
            return this.$http.get('/events.json')
                }


        save() {
            page.content = JSON.stringify(page.content)
            if (page._id)
                return this.$http.put('/events.json' + page._id, page)
            else
                return this.$http.post('/events.json', page)
        }

        delete(page) {
            return this.$http.delete('src/static/events.json' + page._id)
        }

    }])
})(angular.module('app.services'))
