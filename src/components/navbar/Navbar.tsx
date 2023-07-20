import './Navbar.css';
import {Link} from "react-router-dom";

function Navbar () {
    return (
        <div>
            <table className={'nav'}>
                <tbody>
                <tr>
                    <td className={'data'}> <Link className={'link'} to={"/"}>Home </Link></td>
                    <td className={'data'}> <Link className={'link'} to={"/users"}>Users </Link></td>
                    <td className={'data'}>  <Link className={'link'} to={"/staffs"}>Staffs </Link></td>
                    <td className={'data'}><Link className={'link'} to={'/areas'}>Areas </Link></td>
                    <td className={'data'}><Link className={'link'} to={'/animals'}>Animal </Link></td>
                    <td className={'data'}> <Link className={'link'} to={'/connect'}>Connexion </Link></td>
                    <td className={'data'}> <Link className={'link'} to={'/about'}>About </Link></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Navbar;