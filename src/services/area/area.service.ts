import axios, { CancelToken } from "axios";
import { AreaDTO } from "../../components/area/AreaDTO";

export class AreaService {
    static async getAreas(token: CancelToken): Promise<AreaDTO[]> {
        try {
            const response = await axios.get('http://localhost:8000/areas', {
                cancelToken: token,
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching areas:', error);
            throw error;
        }
    }
}