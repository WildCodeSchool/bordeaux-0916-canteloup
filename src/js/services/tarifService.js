((app) => {
    'use strict'
    app.service('tarifsService', ['$http', class tarifs {

        constructor($http) {
            this.$http = $http
        }

        getAll() {
            return this.$http.get('/tarifs.json')
                }


        save() {
            page.content = JSON.stringify(page.content)
            if (page._id)
                return this.$http.put('/tarifs.json' + page._id, page)
            else
                return this.$http.post('/tarifs.json', page)
        }

        delete(page) {
            return this.$http.delete('src/static/tarifs.json' + page._id)
        }

    }])
})(angular.module('app.services'))
