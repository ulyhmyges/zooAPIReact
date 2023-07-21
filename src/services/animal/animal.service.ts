import axios, {CancelToken} from "axios";
import {AnimalDTO} from "../../dto";

export class AnimalService {
    static async getAnimals(token?: CancelToken): Promise<AnimalDTO[] | undefined> {
        try {
            const config = {cancelToken: token}
            const res = await axios.get(
                'http://localhost:8000/animals',
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

}