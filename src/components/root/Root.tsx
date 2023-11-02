import Navbar from "../navbar/Navbar";
import {Outlet} from "react-router-dom";

function Root(){
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Root;