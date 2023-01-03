import { Browser } from "./device.interface";

export interface Tester {
    id?: number,
    email?: string,
    firstname?: string,
    lastname?: string,
    browsers?: Browser[]
}