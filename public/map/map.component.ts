import {Component, Input, Output, EventEmitter, provide  } from 'angular2/core'
import {COMMON_DIRECTIVES} from 'angular2/common'
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';
import {Donor, BG} from '../modal/donor'
import {Observable} from 'rxjs/Observable';
import {MapService} from './map.service'
import {SocketService} from '../services/Socket.service'

@Component({
    selector: 'map-component',
    templateUrl: './map/map.template.html',
    directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES, COMMON_DIRECTIVES],
    styles: [`
    .sebm-google-map-container {
      height: 100%;,
      width: 90%
    }
  `],
    providers: [provide(Navigator, { useValue: window.navigator }), MapService, SocketService]
})
export class MapComponent {
    @Input() Profiles: Observable<Object>;
    @Output() selectDonor: EventEmitter<Donor> = new EventEmitter();
    private Donors: Array<Donor> = [];
    private Latitude: number = 28.459033019728043;
    private Longitude: number = 77.2998046875;
    private zoom: number = 5;
    private donor: Donor;
    private selectedDonor: Donor;

    constructor(private navigator: Navigator, private mapService: MapService,
        socketService: SocketService) {
        this.mapService.getDonors().subscribe((donors) => this.Donors = donors);
        this.donor = new Donor({ Longitude: 0, Latitude: 0 });
        socketService.socket.on('connect', () => {
            socketService.socket.on('donor', () => {
                this.mapService.getDonors().subscribe((donors) => {
                    this.Donors = donors;
                    if (this.Profiles["Patient"] && this.selectedDonor) {
                        var index: number = this.Donors.findIndex((donor) => donor._id == this.selectedDonor._id);
                        if (index >= 0)
                            this.markerClick(this.Donors[index]);
                    }
                });
            })
        });
    };

    ngOnInit() {
        if (window.location.pathname.split('/')[1] != "")
            this.mapService.getDonor(window.location.pathname.split('/')[1])
                .subscribe((donor: Donor) => {
                    this.donor = donor;
                    this.selectDonor.emit(donor);
                    this.Longitude = this.donor.Location.Longitude;
                    this.Latitude = this.donor.Location.Latitude;
                    this.zoom = 15;
                });
        else
            this.getLocation();
    }

    mapClick($event: { coords: { lat: number, lng: number } }) {
        if (this.Profiles["Patient"]) return;
        this.donor.Location = {
            Longitude: $event.coords.lng,
            Latitude: $event.coords.lat
        };
        this.selectDonor.emit(this.donor);
    }

    markerClick(donor: Donor) {
        this.selectedDonor = donor;
        this.selectDonor.emit(this.selectedDonor);
    }

    locationFound(geoLocation: { coords: { latitude: number, longitude: number } }) {
        this.donor.Location = {
            Longitude: geoLocation.coords.longitude,
            Latitude: geoLocation.coords.latitude
        };
        this.Longitude = this.donor.Location.Longitude;
        this.Latitude = this.donor.Location.Latitude;
        this.zoom = 15;
    };

    getLocation() {
        if (this.navigator.geolocation) {
            var mapCmp = this;
            mapCmp.navigator.geolocation.getCurrentPosition(function(position: Position) {
                mapCmp.locationFound(position);
            });
        };
    }
}