((app) => {
    'use strict'
    app.component("home", {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/home/home.html',
        controller: function($location, $anchorScroll, EventsService, CoworkersService, PageService) {
            angular.extend(this, {
                page: {
                    name: 'home',
                    content: ''
                },
                $onInit(){
                  EventsService.getByLimit(3).then((res)=>{
                    this.events = res.data
                  })
                  CoworkersService.getAll().then((res) => {
                      this.coworkers = res.data
                  })
                },
                gotofirstPart() {
                    $location.hash('firstPart')
                    $anchorScroll()
                },
                gototitle() {
                    $location.hash('title_page')
                    $anchorScroll()
                },
                upload(file, field) {
                    PageService.upload(this.page, file, field).then(() => {
                        toastr.success(`${file.name} uploaded`)
                    }).catch((err) => {
                        toastr.warning(`${file.name} upload error`)
                    })
                }
            })
        }
    })
})(angular.module('app.home'))
