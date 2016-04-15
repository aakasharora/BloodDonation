import {Injectable} from 'angular2/core'
import {config} from '../config/config'

@Injectable()
export class SocketService {
    public socket;
    constructor() {
        this.socket = window["io"].connect(config.host);
    }
}