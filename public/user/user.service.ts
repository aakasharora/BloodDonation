import {Injectable, Inject} from 'angular2/core'
import {FormBuilder, ControlGroup, Control, Validators } from 'angular2/common'
import {Donor, BG, PipeBG} from '../modal/donor'
import {ValidationService} from '../services/Validation.service'
import {Http, Response, Headers} from 'angular2/http'
import {config} from '../config/config'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {
    constructor(private builder: FormBuilder, private http: Http, private validations: ValidationService) { }

    newDonorForm(): ControlGroup {
        return this.builder.group({
            fName: ["", Validators.required],
            lName: ["", Validators.required],
            contact: ["", Validators.compose([Validators.required, this.validations.contactValidator])],
            email: ["", Validators.compose([Validators.required, this.validations.emailValidator])],
            bg: ["", Validators.required]
        })
    };

    saveDonor(donor: Donor) {
        var url = config.host + 'api/donors';
        var body = JSON.stringify(donor);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        var request: Observable<Response>;
        if (donor._id) {
            url += '/' + donor._id;
            request = this.http.put(url, body, { headers: headers });
        } else {
            request = this.http.post(url, body, { headers: headers });
        }
        return request.map(r => r.json());
    };

    removeDonor(donor: Donor) {
        var url = config.host + 'api/donors/' + donor._id;
        return this.http.delete(url).map(res=> res.json());
    };
}