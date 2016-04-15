import {Injectable, Inject} from 'angular2/core'
import {Http, RequestOptionsArgs, Headers} from 'angular2/http'
import {config} from '../config/config'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class MapService {
    private options: RequestOptionsArgs;

    constructor(private http: Http) {
        var headers: Headers = new Headers();
        headers.append('cache', 'false');
        this.options = {
            headers: headers
        }
    }

    getDonors() {
        var url = `${config.host}api/donors?${Date.now()}`;
        return this.http.get(url, this.options).map(res=> res.json());
    }

    getDonor(id: string) {
        var url = config.host + 'api/donors/' + id;
        return this.http.get(url, this.options).map(res=> res.json());
    }
}