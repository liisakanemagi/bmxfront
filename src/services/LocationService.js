import axios from "axios";

export default {

    sendPostLocationRequest(userId, location) {
        return axios.post('/location', location, {
            params: {
                userId: userId
            }
        })
    },

    sendGetLocationRequest(locationId) {
        return axios.get('/location', {
            params: {
                locationId: locationId
            }
        })
    },

}