System.register(['angular2/core', 'angular2/common', '../services/Validation.service', 'angular2/http', '../config/config', 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, Validation_service_1, http_1, config_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Validation_service_1_1) {
                Validation_service_1 = Validation_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (_1) {}],
        execute: function() {
            UserService = (function () {
                function UserService(builder, http, validations) {
                    this.builder = builder;
                    this.http = http;
                    this.validations = validations;
                }
                UserService.prototype.newDonorForm = function () {
                    return this.builder.group({
                        fName: ["", common_1.Validators.required],
                        lName: ["", common_1.Validators.required],
                        contact: ["", common_1.Validators.compose([common_1.Validators.required, this.validations.contactValidator])],
                        email: ["", common_1.Validators.compose([common_1.Validators.required, this.validations.emailValidator])],
                        bg: ["", common_1.Validators.required]
                    });
                };
                ;
                UserService.prototype.saveDonor = function (donor) {
                    var url = config_1.config.host + 'api/donors';
                    var body = JSON.stringify(donor);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var request;
                    if (donor._id) {
                        url += '/' + donor._id;
                        request = this.http.put(url, body, { headers: headers });
                    }
                    else {
                        request = this.http.post(url, body, { headers: headers });
                    }
                    return request.map(function (r) { return r.json(); });
                };
                ;
                UserService.prototype.removeDonor = function (donor) {
                    var url = config_1.config.host + 'api/donors/' + donor._id;
                    return this.http.delete(url).map(function (res) { return res.json(); });
                };
                ;
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, Validation_service_1.ValidationService])
                ], UserService);
                return UserService;
            })();
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.service.js.map