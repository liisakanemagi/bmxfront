import axios from "axios";

export default {

    sendPostLocationRequest(userId, location){
        return axios.post('/location', location, {
            params: {
                userId: userId
            }
        })
    }

}