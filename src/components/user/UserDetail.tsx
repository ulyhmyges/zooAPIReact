import './UserDetail.css';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {UserDTO} from "../../dto";
import axios from "axios";
import {UserService} from "../../services";
import UserCell from "./UserCell";

function UserDetail () {
    const {id} = useParams();
    const [user, setUser] = useState<UserDTO | null>();
    useEffect( () => {
        const source = axios.CancelToken.source();
        const fetch = async () => {
            const data = await UserService.getUser(id, source.token);
            setUser(data);
        };
        fetch().catch(console.error);
        return () => source.cancel('un fetch à la fois');
    }, []);

    return (
        <div>
            {
                user && <UserCell user={user} />
            }
        </div>
    )
}

export default UserDetail;