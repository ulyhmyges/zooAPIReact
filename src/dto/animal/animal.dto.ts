import {CarebookDTO} from "../carebook";
import {AreaDTO} from "../area";

export interface AnimalDTO {
    _id?: string,
    name: string,
    scientificName?: string | null;
    birth: string;
    gender: Gender;
    carebook: string | CarebookDTO;
    area: string | AreaDTO;
}

export enum Gender {
    female = "Female",
    male = "Male"
}