import './StaffDetail.css';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {StaffDTO} from "../../dto";
import axios from "axios";
import StaffCell from "./StaffCell";
import {StaffService} from "../../services";

function StaffDetail () {
    const {id} = useParams();
    const [staff, setStaff] = useState<StaffDTO | null>();
    useEffect( () => {
        const source = axios.CancelToken.source();
        const fetch = async () => {
            const data = await StaffService.getStaff(id, source.token);
            setStaff(data);
        };
        fetch().catch(console.error);
        return () => source.cancel('un fetch à la fois');
    }, []);

    return (
        <div>
            {
                staff && <StaffCell staff={staff} />
            }
        </div>
    )
}

export default StaffDetail;