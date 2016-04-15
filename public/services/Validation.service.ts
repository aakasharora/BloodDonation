import {Injectable} from 'angular2/core'
import {Control  } from 'angular2/common'

@Injectable()
export class ValidationService {
    emailValidator(control: Control): { [key: string]: boolean } {
        if (control.value) {
            var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (control.value.match(emailformat)) {
                return null;
            }
        }
        return { "InvalidEmail": true }
    }

    contactValidator(control: Control): { [key: string]: boolean } {
        if (control.value) {
            var matchers = [/^\+([1-9][0-9][1-9][0-9]{9})$/, /^\+([1-9][0-9][1-9][0-9]{8})$/, /^(0{2})([1-9])([0-9]{9})$/]
            for (var i = 0; i < matchers.length; i++) {
                var matcher = matchers[i];
                if (control.value.match(matcher)) {
                    return null;
                };
            };
        }
        return { "InvalidContactNumber": true };
    }
}