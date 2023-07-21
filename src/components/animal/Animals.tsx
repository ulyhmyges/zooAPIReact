import './Animal.css';
import {useEffect, useState} from "react";
import {AnimalDTO} from "../../dto";
import axios from "axios";
import {AnimalService} from "../../services";
import AnimalTable from "./AnimalTable";

function Animals () {
    const [animals, setAnimals] = useState<AnimalDTO[]>();

    useEffect( () => {
        const source = axios.CancelToken.source();
        const fetch = async () => {
            const data = await AnimalService.getAnimals(source.token);
            setAnimals(data);
        };
        fetch().catch(console.error);
        return () => source.cancel();
    }, []);
    console.log("animals: "+ animals)
    return (
        <div>
            <h1>hi</h1>
            <AnimalTable
                heads={['id', 'name', 'scientificName', 'birth', 'gender']}
                rows={animals}
            />
        </div>
    )
}

export default Animals;