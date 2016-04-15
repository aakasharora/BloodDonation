import {Component, Input, ViewEncapsulation  } from 'angular2/core'
import {COMMON_DIRECTIVES  } from 'angular2/common'
import {HeaderComponent} from '../header/header.component'
import {MapComponent} from '../map/map.component'
import {UserDetailComponent} from '../user/user-detail.component'
import {Donor} from '../modal/donor'

@Component({
    selector: 'app',
    templateUrl: './app/app.template.html',
    directives: [HeaderComponent, MapComponent, COMMON_DIRECTIVES, UserDetailComponent],
    styles: [`
        a{cursor:pointer;}
    `],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    private Profiles = {
        "Donor": true,
        "Patient": false
    }

    private User: Donor;
    private userConfig = { shown: true, showContact: false, showEmail: false };

    setActiveProfile($event) {
        Object.keys(this.Profiles).forEach((v, i) => this.Profiles[v] = false);
        this.Profiles[$event] = true;
        this.userConfig.shown = false;
        this.userConfig.showContact = false;
        this.userConfig.showEmail = false;
    }

    selectDonor(donor: Donor) {
        this.User = donor;
        this.userConfig.shown = true;
        this.userConfig.showContact = false;
        this.userConfig.showEmail = false;
    };
}