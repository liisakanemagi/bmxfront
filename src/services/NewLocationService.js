import axios from "axios";

export default {

    sendPostLocationRequest(location){
        return axios.post('/location', location)
    }

}