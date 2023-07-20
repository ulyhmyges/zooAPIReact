import {ObjectDTO} from "../ObjectDTO";

export interface StaffDTO extends ObjectDTO {
    name: string,
    type: EmployeeType,
    availability: AvailabilityDTO
}

export enum EmployeeType {
    zookeeper= "Zookeeper",
    veterinary = "Veterinary",
    officer = "Welcome officer",
    janitor = "Janitor",
    salesman = "Salesman"
}

export interface AvailabilityDTO {
    weeks: WeekDTO[]
}

export interface DayDTO {
    available: boolean,
    time: {begin: number | null, end: number | null}
}

export interface WeekDTO {
    index?: number,
    available?: boolean,
    monday?: DayDTO,
    tuesday?: DayDTO,
    wednesday?: DayDTO,
    thursday?: DayDTO,
    friday?: DayDTO,
    saturday?: DayDTO,
    sunday?: DayDTO,
}