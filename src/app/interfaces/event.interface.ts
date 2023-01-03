import { Browser } from "./device.interface";
import { Tester } from "./tester.interface";

export interface Event {
    id?: number,
    title?: string,
    description?: string,
    caseId?: number,
    environment?: string,
    testers?: Tester[],
    browsers?: Browser[],
}