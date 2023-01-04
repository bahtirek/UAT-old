import { Browser } from "./device.interface";
import { Environment } from "./environment.interface";
import { Tester } from "./tester.interface";

export interface Event {
    id?: number,
    title?: string,
    description?: string,
    caseId?: number,
    environment?: Environment,
    testers?: Tester[],
    browsers?: Browser[],
}