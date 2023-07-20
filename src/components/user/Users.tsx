import './Users.css';
import {useEffect, useState} from "react";
import {UserDTO} from "../../dto";
import axios from "axios";
import {UserService} from "../../services";
import UserCell from "./UserCell";
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
            <h1>hi</h1>
            <UserTable
                heads={['login', 'password', 'type', 'details']}
                rows={users}
            />
        </div>
    )
}

export default Users;