System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PipeBG, BG, Donor;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /*
             * Convert blood group number to string
             * Takes blood group number
             * Usage:
             *   value | PipeBG
             * Example:
             *   {{ 2 |  PipeBG}}
             *   formats to: "A-"
            */
            PipeBG = (function () {
                function PipeBG() {
                }
                PipeBG.prototype.transform = function (value, args) {
                    return BG[value];
                };
                PipeBG = __decorate([
                    core_1.Pipe({ name: 'PipeBG' }), 
                    __metadata('design:paramtypes', [])
                ], PipeBG);
                return PipeBG;
            })();
            exports_1("PipeBG", PipeBG);
            (function (BG) {
                BG[BG["A+"] = 1] = "A+";
                BG[BG["A-"] = 2] = "A-";
                BG[BG["B+"] = 3] = "B+";
                BG[BG["B-"] = 4] = "B-";
                BG[BG["AB+"] = 5] = "AB+";
                BG[BG["AB-"] = 6] = "AB-";
                BG[BG["O+"] = 7] = "O+";
                BG[BG["O-"] = 8] = "O-";
            })(BG || (BG = {}));
            exports_1("BG", BG);
            Donor = (function () {
                function Donor(loc) {
                    this.Location = loc;
                }
                ;
                return Donor;
            })();
            exports_1("Donor", Donor);
            ;
        }
    }
});
//# sourceMappingURL=donor.js.map