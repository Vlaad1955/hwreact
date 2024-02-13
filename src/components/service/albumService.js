import {apiService} from "../service/apiService";
import {urls} from "../../constants/urls";

const albumService = {
    getAll: () => apiService.get(urls.albums.base),
    getById: (id) => apiService.get(urls.albums.ById(id))
};

export {
    albumService
};