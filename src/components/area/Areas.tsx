import './Areas.css';
import { useEffect, useState } from "react";
import { AreaDTO } from "./AreaDTO";
import axios from "axios";
import { AreaService } from "../../services";
import AreaTable from "./AreaTable";

function Areas() {
  const [areas, setAreas] = useState<AreaDTO[]>();

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetch = async () => {
      const data = await AreaService.getAreas(source.token);
      setAreas(data);
    };
    fetch().catch(console.error);
    return () => source.cancel();
  }, []);

  console.log('areas history', window.history.state)

  return (
    <div>
      <h2>Areas</h2>
      <AreaTable
        heads={['Name', 'Type', 'Capacity', 'Details']}
        rows={areas}
      />
    </div>
  );
}

export default Areas;
