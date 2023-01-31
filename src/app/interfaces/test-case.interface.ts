import { TestStep } from "./test-step.interface";

export interface TestCase {
    testCaseId?: number,
    title?: string,
    createdBy?: number,
    created_at?: number,
    deleted?: boolean,
    testStepOrder?: TestStepOrder[]
}

export interface TestStepOrder {
    order?: number,
    testStepId?: number,
    test_step?: TestStep
}

export interface ServerResponse <T> {
    result: T
}