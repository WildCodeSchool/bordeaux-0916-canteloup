((app) => {
    'use strict'
    app.component("adminEvents", {
        templateUrl: 'js/components/admin/events/events.html',
        controller: function(EventsService, $state, $timeout, $location, $anchorScroll) {
            angular.extend(this, {
                $onInit() {
                    EventsService.getAll().then((res) => {
                        this.events = res.data
                    })
                },
                back() {
                    $state.go('app.admin.summary')
                },
                scrollTo(id) {
                    $timeout(function() {
                        $location.hash()
                        $anchorScroll(id)
                    }, 100)
                },
                edit(event) {
                    this.selectedEvent = event
                    this.scrollTo('formEvent')
                },
                add() {
                    this.selectedEvent = {}
                    this.events.push(this.selectedEvent)
                    this.scrollTo('formEvent')
                },
                save() {
                    EventsService.save(this.selectedEvent).then((res) => {
                        if (angular.isUndefined(this.selectedEvent._id))
                            this.events.push(res.data)

                        this.selectedEvent = res.data
                        if (this.uploadImage) {
                            EventsService.upload(this.selectedEvent, this.uploadImage).then((res) => {
                                this.uploadImage = null
                                toastr.success(`${this.selectedEvent.title} saved`)
                            }).catch((err) => {
                                toastr.warning(`${this.selectedEvent.title} upload image error`)
                            })
                        } else {
                            toastr.success(`${this.selectedEvent.title} saved`)
                        }
                    }).catch((err) => {
                        toastr.error(`${err.data}`)
                    })

                },
                delete(idx, event) {
                    this.events.splice(idx, 1)
                    if (angular.isDefined(event._id)) {
                        EventsService.delete(event).then(() => {
                            toastr.warning(`${event.title} deleted`)
                            this.selectedEvent = null
                        }).catch((err) => {
                            toastr.error(`${err.data}`)
                        })
                    } else {
                        this.selectedEvent = null
                    }

                }
            })
        }
    })
})(angular.module('app.admin.events'))
