System.register(['angular2/core', '../radio/radio-list.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, radio_list_component_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (radio_list_component_1_1) {
                radio_list_component_1 = radio_list_component_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent() {
                    this.onProfileChanged = new core_1.EventEmitter();
                }
                HeaderComponent.prototype.profileChanged = function ($event) {
                    this.onProfileChanged.emit($event);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], HeaderComponent.prototype, "Profiles", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], HeaderComponent.prototype, "onProfileChanged", void 0);
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'header',
                        templateUrl: './header/header.template.html',
                        directives: [radio_list_component_1.RadioListComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            })();
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
//# sourceMappingURL=header.component.js.map