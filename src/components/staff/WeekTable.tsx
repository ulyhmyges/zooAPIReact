import './WeekTable.css';

import StaffCell from "./StaffCell";
import './StaffTable.css';
import {WeekDTO} from "../../dto";
import WeekCell from "./WeekCell";

export interface IWeekTable {
    heads: string[],
    rows: WeekDTO[] | undefined
}
function WeekTable (args: IWeekTable) {
    return (
        <table>
            <thead>
            <tr>
                {args.heads && args.heads.map((item, index) => <th key={index}>{item}</th>)}
            </tr>
            </thead>
            <tbody>
            {
                args.rows && args.rows.map((item, idx) => <WeekCell week={item} key={idx} />)
            }
            </tbody>
        </table>
    )
}


export default WeekTable;