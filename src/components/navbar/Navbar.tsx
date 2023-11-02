import './Navbar.css';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div>
            <table className={'nav'}>
                <thead>
                <tr>
                    <td className={'data'}><Link className={'link'} to={"/"} >Home </Link></td>
                    <td className={'data'}><Link className={'link'} to={"/zoo/users"}>Users </Link></td>
                    <td className={'data'}><Link className={'link'} to={"/zoo/staffs"}>Staffs </Link></td>
                    <td className={'data'}><Link className={'link'} to={'/zoo/areas'} state={'hi'}>Areas </Link></td>
                    <td className={'data'}><Link className={'link'} to={'/zoo/animals'}>Animal </Link></td>
                    <td className={'data'}><Link to={'/zoo/dashboard'}>Dashboard</Link></td>
                    <td className={'data'}><Link className={'link'} to={'/zoo/about'}>About </Link></td>
                </tr>
                </thead>
            </table>
        </div>
    )
}

export default Navbar;