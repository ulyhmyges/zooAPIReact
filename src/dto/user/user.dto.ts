import {ObjectDTO} from "../ObjectDTO";

export interface UserDTO extends ObjectDTO {
    _id?: string,
    login: string,
    password: string,
    type: UserType
}

export enum UserType {
    customer = "Customer",
    employee = "Employee",
    administrator = "Administrator"
}