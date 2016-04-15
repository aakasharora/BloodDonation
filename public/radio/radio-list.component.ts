import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {NgFor, NgClass} from 'angular2/common'

@Component({
    selector: 'radio-list',
    directives: [NgFor, NgClass],
    template: `
        <ul class="nav nav-pills" style="float: right;">
            <li style="top:5px;" [ngClass]="{active: List[key]}" *ngFor="#key of keys()" (click)="select(key)">
                <a [style.cursor]="'pointer'">{{key}}</a>
            </li>
        </ul>
            `
})
export class RadioListComponent {
    @Input() List: Object;
    @Output() selected = new EventEmitter();

    select(key: string) {
        if (this.List[key]) return;

        Object.keys(this.List).forEach((v, i) => { this.List[v] = false });
        this.List[key] = true;
        this.selected.emit(key);
    };

    keys() {
        return Object.keys(this.List);
    }
};