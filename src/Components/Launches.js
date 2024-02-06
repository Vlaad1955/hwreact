import React, {useEffect, useState} from 'react';
import {launchesService} from "../services/launchesService";
import Launching from "./Launching";

const Launches = () => {
    const [launch, setLaunch] = useState([])
    useEffect(() => {
        launchesService.getAll().then(({data}) => setLaunch(data))
    }, []);
    const filteredLaunches = launch.filter(launch => launch.launch_year !== `2020`);
    return (
        <div>
            {filteredLaunches.map(launch => <Launching key = {launch.flight_number} launch = {launch}/>)}
        </div>
    );
};

export default Launches;