import {AnimalDTO} from "../animal";
import {AvailabilityDTO, EmployeeType, StaffDTO} from "../staff";

export interface TreatmentDTO {
    _id?: string;
    animal: string | AnimalDTO;
    date: string;
    place: string;
    description: string;
    veterinary: string | VeterinaryDTO;
}

export interface VeterinaryDTO extends StaffDTO{
    name: string;
    availability: AvailabilityDTO;
    type: EmployeeType;
}