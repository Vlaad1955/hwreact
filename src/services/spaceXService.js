import axios from "axios";
import {SpaceX} from "../constants/urls";

const spaceXService = axios.create({baseURL: SpaceX});

export {
    spaceXService
}