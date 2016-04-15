System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var RadioListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            RadioListComponent = (function () {
                function RadioListComponent() {
                    this.selected = new core_1.EventEmitter();
                }
                RadioListComponent.prototype.select = function (key) {
                    var _this = this;
                    if (this.List[key])
                        return;
                    Object.keys(this.List).forEach(function (v, i) { _this.List[v] = false; });
                    this.List[key] = true;
                    this.selected.emit(key);
                };
                ;
                RadioListComponent.prototype.keys = function () {
                    return Object.keys(this.List);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], RadioListComponent.prototype, "List", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], RadioListComponent.prototype, "selected", void 0);
                RadioListComponent = __decorate([
                    core_1.Component({
                        selector: 'radio-list',
                        directives: [common_1.NgFor, common_1.NgClass],
                        template: "\n        <ul class=\"nav nav-pills\" style=\"float: right;\">\n            <li style=\"top:5px;\" [ngClass]=\"{active: List[key]}\" *ngFor=\"#key of keys()\" (click)=\"select(key)\">\n                <a [style.cursor]=\"'pointer'\">{{key}}</a>\n            </li>\n        </ul>\n            "
                    }), 
                    __metadata('design:paramtypes', [])
                ], RadioListComponent);
                return RadioListComponent;
            })();
            exports_1("RadioListComponent", RadioListComponent);
            ;
        }
    }
});
//# sourceMappingURL=radio-list.component.js.map