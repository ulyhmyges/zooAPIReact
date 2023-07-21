import './AreaCell.css';
import { AreaDTO } from "./AreaDTO";
import { Link, useParams } from "react-router-dom";

export interface IAreaCell {
  area: AreaDTO;
}

function AreaCell(args: IAreaCell) {
  const { id } = useParams();

  if (!id) {
    return (
      <tr>
        <td>{args.area.name}</td>
        <td>{args.area.type}</td>
        <td>{args.area.capacity}</td>
        <td>
          {<Link to={`/areas/${args.area._id}`}>More details</Link>}
        </td>
      </tr>
    );
  } else {
    return (
      <div>
        <h3>Area details</h3>
        <p>id: {args.area._id}</p>
        <p>name: {args.area.name}</p>
        <p>type: {args.area.type}</p>
        <p>capacity: {args.area.capacity}</p>
        {/* Add more details here */}
      </div>
    );
  }
}

export default AreaCell;
