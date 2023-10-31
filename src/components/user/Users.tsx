import './Users.css';
import {useEffect, useState} from "react";
import {UserDTO} from "../../dto";
import axios from "axios";
import {UserService} from "../../services";
import UserTable from "./UserTable";

function Users () {
    const [users, setUsers] = useState<UserDTO[]>();

    useEffect( () => {
        const source = axios.CancelToken.source();
        const fetch = async () => {
            const data = await UserService.getUsers(source.token);
            setUsers(data);
        };
        fetch().catch(console.error);
        return () => source.cancel();
    }, []);
    console.log("users: "+ users)
    return (
        <div>
            <h2>Users</h2>
            <UserTable
                heads={['login', 'type', 'details']}
                rows={users}
            />
        </div>
    )
}

export default Users;