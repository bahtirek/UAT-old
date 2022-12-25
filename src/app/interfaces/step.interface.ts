export interface Step {
    id?: number,
    description?: string,
    expectedResults?:string,
    caseId?: number,
    order?: number
}