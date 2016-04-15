import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app/app.component'
import {ANGULAR2_GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';
import {HTTP_PROVIDERS} from 'angular2/http'
import {ValidationService} from './services/Validation.service'
import {provide } from 'angular2/core'

bootstrap(AppComponent, [ANGULAR2_GOOGLE_MAPS_PROVIDERS,
    HTTP_PROVIDERS,
    ValidationService
]);