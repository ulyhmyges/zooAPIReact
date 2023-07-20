import './WeekCell.css';

import {WeekDTO} from "../../dto";

export interface IWeekCell {
    week: WeekDTO
}

function WeekCell (args: IWeekCell) {

        return (
            <tr>
                <td>{args.week.index}</td>
                <td>{args.week.available ? 'true' : 'false'}</td>

                <td>
                    {args.week.monday?.available
                        ?
                    `${args.week.monday.time.begin}h-${args.week.monday.time.end}h`: 'None'}
                </td>
                <td>
                    {args.week.tuesday?.available
                        ?
                        `${args.week.tuesday.time.begin}h-${args.week.tuesday.time.end}h`: 'None'}
                </td>
                <td>
                    {args.week.wednesday?.available
                        ?
                        `${args.week.wednesday.time.begin}h-${args.week.wednesday.time.end}h`: 'None'}
                </td>
                <td>
                    {args.week.thursday?.available
                        ?
                        `${args.week.thursday.time.begin}h-${args.week.thursday.time.end}h`: 'None'}
                </td>
                <td>
                    {args.week.friday?.available
                        ?
                        `${args.week.friday.time.begin}h-${args.week.friday.time.end}h`: 'None'}
                </td>
                <td>
                    {args.week.saturday?.available
                        ?
                        `${args.week.saturday.time.begin}h-${args.week.saturday.time.end}h`: 'None'}
                </td>
                <td>
                    {args.week.sunday?.available
                        ?
                        `${args.week.sunday.time.begin}h-${args.week.sunday.time.end}h`: 'None'}
                </td>
            </tr>
        );
}

export default WeekCell;