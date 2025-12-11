import axios from "axios";

export default {
    sendGetLocationTypesRequest() {
        return axios.get('/location-types')
    }
}