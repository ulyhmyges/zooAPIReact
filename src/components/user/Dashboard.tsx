import './Dashboard.css';
import UserDetail from "./UserDetail";
import {IUserCell} from "./UserCell";
import {useLocation, useParams} from "react-router-dom";

function Dashboard() {

    const id = useParams()

    console.log('id ',id)
    if (id) {
        return (
            <div>
                <h3>Dashboard</h3>
                <UserDetail/>
            </div>
        );
    }
    return (
        <div>
            <h3>No Dashboard!</h3>
        </div>
    )
}

export default Dashboard;