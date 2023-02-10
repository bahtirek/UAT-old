export interface User {
    firstname?: string,
    lastname?: string,
    email?: string,
    userId?: number
}

export interface ServerResponse <T> {
    result: T
}