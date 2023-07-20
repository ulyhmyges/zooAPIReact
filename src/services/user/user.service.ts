import axios, {CancelToken} from "axios";
import {UserDTO} from "../../dto";

export class UserService {
    static async getUsers(token?: CancelToken): Promise<UserDTO[] | undefined> {
        try {
            const config = {cancelToken: token}
            const res = await axios.get(
                'http://localhost:8000/auth/users',
                config,
            );
            if (Array.isArray(res.data)) {
                return res.data;
            }

        } catch (e: unknown) {
            console.error(e)
            return undefined
        }
    }

    static async getUser(id: string | undefined, token?: CancelToken): Promise<UserDTO | null> {
        try {
            const config = {cancelToken: token}
            const res = await axios.get(`http://localhost:8000/auth/users/${id}`)
            return res.data
        } catch (e: unknown) {
            return null
        }
    }
}