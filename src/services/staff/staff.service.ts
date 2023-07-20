import axios, {CancelToken} from "axios";
import {StaffDTO} from "../../dto";

export class StaffService {
    static async getStaffs(token?: CancelToken): Promise<StaffDTO[] | undefined> {
        try {
            const config = {cancelToken: token}
            const res = await axios.get(
                'http://localhost:8000/staffs',
                config,
            );
            if (Array.isArray(res.data)) {
                return res.data
            }
        } catch (e: unknown) {
            return
        }
    }

    static async getStaff(id: string | undefined, token?: CancelToken): Promise<StaffDTO | undefined> {
        try {
            const config = {cancelToken: token}
            if (id) {
                const res = await axios.get(
                    `http://localhost:8000/staffs/${id}`,
                    config,
                );
                return res.data
            }
            const alt = await axios.get(
                'http://localhost:8080/staffs',
                config,
            );
            if (Array.isArray(alt.data)) {
                return alt.data[0];
            }

        } catch (e: unknown) {
            console.error()
            return
        }
    }
}