System.register(['angular2/core', 'angular2/common', '../modal/donor', '../services/Socket.service', './user.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, donor_1, Socket_service_1, user_service_1;
    var UserDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (donor_1_1) {
                donor_1 = donor_1_1;
            },
            function (Socket_service_1_1) {
                Socket_service_1 = Socket_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            UserDetailComponent = (function () {
                function UserDetailComponent(userService, socketService) {
                    this.userService = userService;
                    this.socketService = socketService;
                    this.BloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
                    this.donorForm = this.userService.newDonorForm();
                }
                UserDetailComponent.prototype.close = function () {
                    this.userConfig["shown"] = false;
                };
                UserDetailComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.userService.saveDonor(this.User)
                        .subscribe(function (donor) {
                        _this.User._id = donor._id;
                        _this.socketService.socket.emit('donor');
                        alert('Your information is saved');
                    });
                };
                UserDetailComponent.prototype.onRemove = function () {
                    var _this = this;
                    this.userService.removeDonor(this.User)
                        .subscribe(function (removed) {
                        if (removed) {
                            _this.socketService.socket.emit('donor');
                            window.location.href = "/";
                        }
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', donor_1.Donor)
                ], UserDetailComponent.prototype, "User", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], UserDetailComponent.prototype, "userConfig", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], UserDetailComponent.prototype, "Profiles", void 0);
                UserDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'user-detail',
                        templateUrl: './user/user-detail.template.html',
                        styleUrls: ['./user/user-detail.css'],
                        directives: [common_1.COMMON_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        pipes: [donor_1.PipeBG],
                        providers: [user_service_1.UserService, Socket_service_1.SocketService]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, Socket_service_1.SocketService])
                ], UserDetailComponent);
                return UserDetailComponent;
            })();
            exports_1("UserDetailComponent", UserDetailComponent);
        }
    }
});
//# sourceMappingURL=user-detail.component.js.map