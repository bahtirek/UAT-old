import { Browser } from "./device.interface";

export interface Tester {
    testerId?: number,
    email?: string,
    firstname?: string,
    lastname?: string,
    browsers?: Browser[]
}