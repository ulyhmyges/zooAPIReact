import AreaCell from "./AreaCell";
import { AreaDTO } from "./AreaDTO";
import './AreaTable.css';

export interface IAreaTable {
  heads: string[];
  rows: AreaDTO[] | undefined;
}

function AreaTable(args: IAreaTable) {
  return (
    <table className={'hoverTable'}>
      <thead>
        <tr>
          {args.heads && args.heads.map((item, index) => <th key={index}>{item}</th>)}
        </tr>
      </thead>
      <tbody>
        {
          args.rows && args.rows.map((item, idx) => <AreaCell area={item} key={idx} />)
        }
      </tbody>
    </table>
  );
}

export default AreaTable;
