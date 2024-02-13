import {apiService} from "../service/apiService";
import {urls} from "../../constants/urls";

const todoService = {
    getAll: () => apiService.get(urls.todos.base),
    getById: (id) => apiService.get(urls.todos.ById(id))
};

export {
    todoService
};