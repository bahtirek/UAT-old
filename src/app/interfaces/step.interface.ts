export interface Step {
    id?: number,
    description?: string,
    expected?:string,
    caseId?: number,
    order?: number
}