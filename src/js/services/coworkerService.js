((app) => {
    'use strict'
    app.service('CoworkersService', ['$http', '$cookies', class CoworkersService {

        constructor($http, $cookies) {
            this.$http = $http
            this.$cookies = $cookies
        }

        getAll() {
            return this.$http.get('/api/coworkers')
        }

        save(coworker) {
            if (coworker._id)
                return this.$http.put('/api/coworkers/' + coworker._id, coworker)
            else
                return this.$http.post('/api/coworkers', coworker)
        }

        delete(coworker) {
            return this.$http.delete('/api/coworkers/' + coworker._id)
        }

        upload(coworker, file) {
            return new Promise((resolve, reject) => {
                let url = '/api/coworkers/upload/' + coworker._id
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
                fd.append("upload_file", file)
                xhr.send(fd)
            })
        }

    }])
})(angular.module('app.services'))
