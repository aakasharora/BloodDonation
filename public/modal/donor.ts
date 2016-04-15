import {Pipe, PipeTransform} from 'angular2/core';
/*
 * Convert blood group number to string
 * Takes blood group number
 * Usage:
 *   value | PipeBG
 * Example:
 *   {{ 2 |  PipeBG}}
 *   formats to: "A-"
*/
@Pipe({ name: 'PipeBG' })
export class PipeBG implements PipeTransform {
    transform(value: number, args: string[]): string {
        return BG[value];
    }
}


export enum BG {
    "A+" = 1,
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-",
    "O+",
    "O-"
}

interface Location {
    Address?: string;
    IP?: string;
    Longitude: number,
    Latitude: number
}

export class Donor {
    public _id: string;
    public FirstName: string;
    public LastName: string;
    public BloodGroup: BG;
    public Location: Location;
    public ContactNumber: string;
    public Email: string;

    constructor(loc: Location) {
        this.Location = loc;
    };
};