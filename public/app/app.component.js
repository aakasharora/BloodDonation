System.register(['angular2/core', 'angular2/common', '../header/header.component', '../map/map.component', '../user/user-detail.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, header_component_1, map_component_1, user_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (map_component_1_1) {
                map_component_1 = map_component_1_1;
            },
            function (user_detail_component_1_1) {
                user_detail_component_1 = user_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.Profiles = {
                        "Donor": true,
                        "Patient": false
                    };
                    this.userConfig = { shown: true, showContact: false, showEmail: false };
                }
                AppComponent.prototype.setActiveProfile = function ($event) {
                    var _this = this;
                    Object.keys(this.Profiles).forEach(function (v, i) { return _this.Profiles[v] = false; });
                    this.Profiles[$event] = true;
                    this.userConfig.shown = false;
                    this.userConfig.showContact = false;
                    this.userConfig.showEmail = false;
                };
                AppComponent.prototype.selectDonor = function (donor) {
                    this.User = donor;
                    this.userConfig.shown = true;
                    this.userConfig.showContact = false;
                    this.userConfig.showEmail = false;
                };
                ;
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: './app/app.template.html',
                        directives: [header_component_1.HeaderComponent, map_component_1.MapComponent, common_1.COMMON_DIRECTIVES, user_detail_component_1.UserDetailComponent],
                        styles: ["\n        a{cursor:pointer;}\n    "],
                        encapsulation: core_1.ViewEncapsulation.None
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map