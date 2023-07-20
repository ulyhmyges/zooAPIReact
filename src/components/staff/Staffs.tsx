import './Staffs.css';
import {useEffect, useState} from "react";
import {StaffDTO, UserDTO} from "../../dto";
import axios from "axios";
import {StaffService} from "../../services";
import StaffTable from "./StaffTable";

function Staffs () {
    const [staffs, setStaffs] = useState<StaffDTO[]>();

    useEffect( () => {
        const source = axios.CancelToken.source();
        const fetch = async () => {
            const data = await StaffService.getStaffs(source.token);
            setStaffs(data);
        };
        fetch().catch(console.error);
        return () => source.cancel();
    }, []);
    console.log("staffs: "+ staffs)
    return (
        <div>
            <h1>hi</h1>
            <StaffTable
                heads={['name', 'type', 'available', 'details']}
                rows={staffs}
            />
        </div>
    )
}

export default Staffs;