import './UserCell.css';
import {UserDTO} from "../../dto";
import {Link, useParams} from "react-router-dom";

export interface IUserCell {
    user: UserDTO
}

function UserCell (args: IUserCell) {
    const {id} = useParams();

    if (!id) {
        return (
            <tr>
                <td>{args.user.login}</td>
                <td>{args.user.type}</td>

                <td>
                    {<Link to={`/users/${args.user._id}`} className={'.link'}>More details</Link>}
                </td>

            </tr>
        )
    } else {
        return (
            <div>
                <h3>User details</h3>
                <p>id: {args.user._id}</p>
                <p>login:   {args.user.login}</p>
                <p>type:    {args.user.type ?? "empty"}</p>
            </div>
        )
    }
}

export default UserCell;