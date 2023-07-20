export interface UserDTO {
    login: string,
    password: string,
    type: UserType
}

export enum UserType {
    customer = "Customer",
    employee = "Employee",
    administrator = "Administrator"
}