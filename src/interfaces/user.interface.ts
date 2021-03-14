export interface User {
    id:        string;
    name:      Name;
    age:       number;
    isWorkNow: boolean;
    email:     null | string;
    username:  string;
    gender:    Gender;
    company:   Company;
}

export interface Company {
    name:  null | string;
    years: number;
}

export enum Gender {
    F = "F",
    M = "M",
}

export interface Name {
    firstName: string;
    lastName:  string;
}
