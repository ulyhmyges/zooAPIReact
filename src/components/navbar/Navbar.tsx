import './Navbar.css';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div>
            <table className={'nav'}>
                <thead>
                <tr>
                    <td className={'data'}><Link className={'link'} to={"/"} >Home </Link></td>
                    <td className={'data'}><Link className={'link'} to={"/users"}>Users </Link></td>
                    <td className={'data'}><Link className={'link'} to={"/staffs"}>Staffs </Link></td>
                    <td className={'data'}><Link className={'link'} to={'/areas'} state={'hi'}>Areas </Link></td>
                    <td className={'data'}><Link className={'link'} to={'/animals'}>Animal </Link></td>
                    <td className={'data'}><Link className={'link'} to={'/connection'}>Connection </Link></td>
                    <td className={'data'}><Link to={'/users/dashboard'}>Dashboard</Link></td>
                    <td className={'data'}><Link className={'link'} to={'/about'}>About </Link></td>
                </tr>
                </thead>
            </table>
        </div>
    )
}

export default Navbar;