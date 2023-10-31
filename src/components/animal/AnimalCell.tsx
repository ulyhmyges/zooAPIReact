import './Animal.css';
import {AnimalDTO} from "../../dto";
import {useParams} from "react-router-dom";


export interface IAnimalDTO {
    animal: AnimalDTO
}

function AnimalCell (args: IAnimalDTO) {
    const {id} = useParams();

    if (!id) {
        return (
            <tr>
                <td>{args.animal._id}</td>
                <td>{args.animal.name}</td>
                <td>{args.animal.scientificName}</td>
                <td>{args.animal.birth}</td>
                <td>{args.animal.gender}</td>
            </tr>
        )
    }

    return <></>;
}

export default AnimalCell;