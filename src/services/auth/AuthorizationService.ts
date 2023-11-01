import axios from "axios";

export class AuthorizationService {

    static async getAuthorization(login: string, password: string): Promise<string | undefined> {
        try {
            const res = await axios.post('http://localhost:8000/auth/login',
                {login: login, password: password});
            console.log('res.data: ', res.data.token)
            if (res.data.token){
                return res.data.token
            }
            return res.data;
        } catch (e: unknown) {
            console.log('getAuthorization Error: ', e)
            return;
        }
    }
}