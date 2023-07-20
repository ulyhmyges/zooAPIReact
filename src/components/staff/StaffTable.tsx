import StaffCell from "./StaffCell";
import './StaffTable.css';
import {StaffDTO} from "../../dto";

export interface IStaffTable {
    heads: string[],
    rows: StaffDTO[] | undefined
}
function StaffTable (args: IStaffTable) {
    return (
        <table>
            <thead>
            <tr>
                {args.heads && args.heads.map((item, index) => <th key={index}>{item}</th>)}
            </tr>
            </thead>
            <tbody>
            {
                args.rows && args.rows.map((item, idx) => <StaffCell staff={item} key={idx} />)
            }
            </tbody>
        </table>
    )
}


export default StaffTable;