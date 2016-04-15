import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {COMMON_DIRECTIVES, FORM_DIRECTIVES, ControlGroup } from 'angular2/common'
import {Donor, BG, PipeBG} from '../modal/donor'
import {ValidationService} from '../services/Validation.service'
import {SocketService} from '../services/Socket.service'
import {UserService} from './user.service'

@Component({
    selector: 'user-detail',
    templateUrl: './user/user-detail.template.html',
    styleUrls: ['./user/user-detail.css'],
    directives: [COMMON_DIRECTIVES, FORM_DIRECTIVES],
    pipes: [PipeBG],
    providers: [UserService, SocketService]
})

export class UserDetailComponent {
    @Input() User: Donor;
    @Input() userConfig: any;
    @Input() Profiles: { Donor: boolean, Patient: boolean };
    private BloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
    private donorForm: ControlGroup;
    constructor(private userService: UserService, private socketService: SocketService) {
        this.donorForm = this.userService.newDonorForm();
    }

    close() {
        this.userConfig["shown"] = false;
    }

    onSubmit() {
        this.userService.saveDonor(this.User)
            .subscribe((donor: Donor) => {
                this.User._id = donor._id;
                this.socketService.socket.emit('donor');
                alert('Your information is saved');
            });
    }

    onRemove() {
        this.userService.removeDonor(this.User)
            .subscribe((removed: boolean) => {
                if (removed) {
                    this.socketService.socket.emit('donor');
                    window.location.href = `/`;
                }
            });
    }
}