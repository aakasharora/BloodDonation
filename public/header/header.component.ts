import {Component, Input, Output, EventEmitter } from 'angular2/core'
import {RadioListComponent} from '../radio/radio-list.component'

@Component({
    selector: 'header',
    templateUrl: './header/header.template.html',
    directives: [RadioListComponent]
})

export class HeaderComponent {
    @Input() Profiles: Object;
    @Output() onProfileChanged = new EventEmitter();

    profileChanged($event) {
        this.onProfileChanged.emit($event);
    }
}