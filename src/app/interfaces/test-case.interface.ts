import { TestStep } from "./test-step.interface";

export interface TestCase {
    testCaseId?: number,
    title?: string,
    createdBy?: number,
    created_at?: number,
    deleted?: boolean,
    importedTestCaseId?: number,
    testStepOrder?: TestStepOrder[]
}

export interface TestStepOrder {
    order?: number,
    testStepId?: number,
    test_step?: TestStep,
    imported?: boolean,
    importedTestCaseId?: number,
    importedCaseTitle?: string
}

export interface ServerResponse <T> {
    result: T
}