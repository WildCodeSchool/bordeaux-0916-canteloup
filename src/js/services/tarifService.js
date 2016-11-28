((app) => {
    'use strict'
    app.service('TarifsService', ['$http', '$cookies', class TarifsService {

        constructor($http, $cookies) {
            this.$http = $http
            this.$cookies = $cookies
        }

        getAll() {
            return this.$http.get('/api/tarifs')
        }

        save(tarif) {
          if (tarif._id)
              return this.$http.put('/api/tarifs/' + tarif._id, tarif)
          else
              return this.$http.post('/api/tarifs', tarif)
        }

        delete(tarif) {
            return this.$http.delete('/api/tarifs/' + tarif._id)
        }

        upload(tarif, file) {
            return new Promise((resolve, reject) => {
                let url = '/api/tarifs/upload/' + tarif._id
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
                fd.append("image", file)
                xhr.send(fd)
            })
        }

    }])
})(angular.module('app.services'))
