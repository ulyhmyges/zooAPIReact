import {AnimalDTO} from "../animal";
import {AvailabilityDTO, EmployeeType, StaffDTO} from "../staff";
import {TreatmentDTO} from "../treatment";

export interface CarebookDTO {
    _id?: string;
    owner: string | AnimalDTO;
    start: string;
    health: Wellbeing;
    treatments: string[] | TreatmentDTO[]
}

export enum Wellbeing {
    healthy = "Healthy",
    unwell = "Unwell",
    week = "Week",
    diseased = "Diseased",
    dead = "Dead"
}


