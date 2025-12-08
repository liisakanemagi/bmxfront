import axios from "axios";

export default {
    sendGetLocationTypeRequest() {
        return axios.get('/location-types')
    }
}