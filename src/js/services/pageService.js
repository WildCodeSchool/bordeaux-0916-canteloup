((app) => {
    'use strict'
    app.service('PageService', ['$http', '$cookies', class PageService {

        constructor($http, $cookies) {
            this.$http = $http
            this.$cookies = $cookies
        }

        getAll() {
            return this.$http.get('/api/pages')
        }

        get(name) {
            return this.$http.get('/api/pages/' + name)
        }

        save(page) {
            page.content = JSON.stringify(page.content)
            if (page._id)
                return this.$http.put('/api/pages/' + page._id, page)
            else
                return this.$http.post('/api/pages', page)
        }

        delete(page) {
            return this.$http.delete('/api/pages/' + page._id)
        }

        upload(page, file, field) {
            return new Promise((resolve, reject) => {
                let url = '/api/pages/upload/' + page._id
                let xhr = new XMLHttpRequest()
                let fd = new FormData()
                xhr.open("POST", url, true);
                xhr.setRequestHeader("Authorization", this.$cookies.get('token'));
                xhr.onreadystatechange = function(e) {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            resolve()
                        }else{
                            reject()
                        }
                    }
                };
                fd.append(field, file)
                xhr.send(fd)
            })
        }

    }])
})(angular.module('app.services'))
