System.register(['angular2/core', 'angular2/common', 'angular2-google-maps/core', '../modal/donor', 'rxjs/Observable', './map.service', '../services/Socket.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, core_2, donor_1, Observable_1, map_service_1, Socket_service_1;
    var MapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (donor_1_1) {
                donor_1 = donor_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (map_service_1_1) {
                map_service_1 = map_service_1_1;
            },
            function (Socket_service_1_1) {
                Socket_service_1 = Socket_service_1_1;
            }],
        execute: function() {
            MapComponent = (function () {
                function MapComponent(navigator, mapService, socketService) {
                    var _this = this;
                    this.navigator = navigator;
                    this.mapService = mapService;
                    this.selectDonor = new core_1.EventEmitter();
                    this.Donors = [];
                    this.Latitude = 28.459033019728043;
                    this.Longitude = 77.2998046875;
                    this.zoom = 5;
                    this.mapService.getDonors().subscribe(function (donors) { return _this.Donors = donors; });
                    this.donor = new donor_1.Donor({ Longitude: 0, Latitude: 0 });
                    socketService.socket.on('connect', function () {
                        socketService.socket.on('donor', function () {
                            _this.mapService.getDonors().subscribe(function (donors) {
                                _this.Donors = donors;
                                if (_this.Profiles["Patient"] && _this.selectedDonor) {
                                    var index = _this.Donors.findIndex(function (donor) { return donor._id == _this.selectedDonor._id; });
                                    if (index >= 0)
                                        _this.markerClick(_this.Donors[index]);
                                }
                            });
                        });
                    });
                }
                ;
                MapComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (window.location.pathname.split('/')[1] != "")
                        this.mapService.getDonor(window.location.pathname.split('/')[1])
                            .subscribe(function (donor) {
                            _this.donor = donor;
                            _this.selectDonor.emit(donor);
                            _this.Longitude = _this.donor.Location.Longitude;
                            _this.Latitude = _this.donor.Location.Latitude;
                            _this.zoom = 15;
                        });
                    else
                        this.getLocation();
                };
                MapComponent.prototype.mapClick = function ($event) {
                    if (this.Profiles["Patient"])
                        return;
                    this.donor.Location = {
                        Longitude: $event.coords.lng,
                        Latitude: $event.coords.lat
                    };
                    this.selectDonor.emit(this.donor);
                };
                MapComponent.prototype.markerClick = function (donor) {
                    this.selectedDonor = donor;
                    this.selectDonor.emit(this.selectedDonor);
                };
                MapComponent.prototype.locationFound = function (geoLocation) {
                    this.donor.Location = {
                        Longitude: geoLocation.coords.longitude,
                        Latitude: geoLocation.coords.latitude
                    };
                    this.Longitude = this.donor.Location.Longitude;
                    this.Latitude = this.donor.Location.Latitude;
                    this.zoom = 15;
                };
                ;
                MapComponent.prototype.getLocation = function () {
                    if (this.navigator.geolocation) {
                        var mapCmp = this;
                        mapCmp.navigator.geolocation.getCurrentPosition(function (position) {
                            mapCmp.locationFound(position);
                        });
                    }
                    ;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Observable_1.Observable)
                ], MapComponent.prototype, "Profiles", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], MapComponent.prototype, "selectDonor", void 0);
                MapComponent = __decorate([
                    core_1.Component({
                        selector: 'map-component',
                        templateUrl: './map/map.template.html',
                        directives: [core_2.ANGULAR2_GOOGLE_MAPS_DIRECTIVES, common_1.COMMON_DIRECTIVES],
                        styles: ["\n    .sebm-google-map-container {\n      height: 100%;,\n      width: 90%\n    }\n  "],
                        providers: [core_1.provide(Navigator, { useValue: window.navigator }), map_service_1.MapService, Socket_service_1.SocketService]
                    }), 
                    __metadata('design:paramtypes', [Navigator, map_service_1.MapService, Socket_service_1.SocketService])
                ], MapComponent);
                return MapComponent;
            })();
            exports_1("MapComponent", MapComponent);
        }
    }
});
//# sourceMappingURL=map.component.js.map