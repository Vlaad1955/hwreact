
import {urls} from "../constants/urls";
import {spaceXService} from "./spaceXService";


const launchesService = {
    getAll: () => spaceXService(urls.spacex.base),
    getById: (id) => spaceXService(urls.spacex.byId(id))
}

export {
    launchesService
}