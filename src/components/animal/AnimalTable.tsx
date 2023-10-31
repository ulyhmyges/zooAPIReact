import AnimalCell from "./AnimalCell";
import './AnimalTable.css';
import {AnimalDTO} from "../../dto";

export interface IAnimalTable {
    heads: string[],
    rows: AnimalDTO[] | undefined
}
function AnimalTable (args: IAnimalTable) {
    return (
        <table className={'hoverTable'}>
            <thead>
            <tr>
                {args.heads && args.heads.map((item, index) => <th key={index}>{item}</th>)}
            </tr>
            </thead>
            <tbody>
            {
                args.rows && args.rows.map((item, idx) => <AnimalCell animal={item} key={idx} />)
            }
            </tbody>
        </table>
    )
}


export default AnimalTable;