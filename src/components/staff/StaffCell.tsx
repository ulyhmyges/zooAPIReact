import './StaffCell.css';
import {StaffDTO} from "../../dto";
import {Link, useParams} from "react-router-dom";
import WeekTable from "./WeekTable";

export interface IStaffCell {
    staff: StaffDTO
}

function StaffCell (args: IStaffCell) {
    const {id} = useParams();

    if (!id) {
        return (
            <tr>
                <td>{args.staff.name}</td>
                <td>{args.staff.type}</td>

                <td>{args.staff.availability?.weeks ? 'true' : 'false'}</td>
                <td>
                    {<Link to={`/staffs/${args.staff._id}`}>More details</Link>}
                </td>

            </tr>
        )
    } else {
        return (
            <div>
                <h3>Staff details</h3>
                <p>id: {args.staff._id}</p>
                <p>login:   {args.staff.name}</p>
                <p>type:    {args.staff.type}</p>
                <div>
                    {
                        <WeekTable
                            heads={['n° Week', 'available', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']}
                            rows={args.staff.availability.weeks}
                        />
                    }
                </div>

            </div>
        )
    }
}

export default StaffCell;