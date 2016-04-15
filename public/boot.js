System.register(['angular2/platform/browser', './app/app.component', 'angular2-google-maps/core', 'angular2/http', './services/Validation.service'], function(exports_1) {
    var browser_1, app_component_1, core_1, http_1, Validation_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Validation_service_1_1) {
                Validation_service_1 = Validation_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [core_1.ANGULAR2_GOOGLE_MAPS_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                Validation_service_1.ValidationService
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map