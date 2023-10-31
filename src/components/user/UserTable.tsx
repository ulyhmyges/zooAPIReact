//import './UserTable.css';
import './Table.css';
import UserCell from "./UserCell";
import {UserDTO} from "../../dto";

export interface IUserTable {
    heads: string[],
    rows: UserDTO[] | undefined
}
function UserTable (args: IUserTable) {
    return (
        <table>
            <thead>
            <tr>
                {args.heads && args.heads.map((item, index) => <th key={index}>{item}</th>)}
            </tr>
            </thead>
            <tbody>
            {
                args.rows && args.rows.map((item, idx) => <UserCell user={item} key={idx} />)
            }
            </tbody>
        </table>
    )
}


export default UserTable;